import React, { useRef, useState, useEffect } from 'react'

import './DrawingBoard.css'
import { Eraser, PaintBrush, TrashSimple } from 'phosphor-react'

const DrawingBoard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [color, setColor] = useState<string>('#000000')
  const [brushSize, setBrushSize] = useState<number>(5)
  const [drawing, setDrawing] = useState<boolean>(false)
  const [history, setHistory] = useState<CanvasRenderingContext2D[]>([])
  const [isEraser, setIsEraser] = useState<boolean>(false)

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
    setIsEraser(false) // Reset the eraser mode when changing color
  }

  const handleBrushSizeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBrushSize(Number(event.target.value))
  }

  const handleClearCanvas = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        setHistory([])
      }
    }
  }

  const handleUndo = () => {
    if (canvasRef.current && history.length > 0) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        const lastState = history[history.length - 1]
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        ctx.drawImage(lastState.canvas, 0, 0)
        setHistory(history.slice(0, -1))
      }
    }
  }

  const handleMouseDown = (
    event:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      const { offsetX, offsetY } = getCoordinates(event)
      ctx.beginPath()
      ctx.moveTo(offsetX, offsetY)
      setDrawing(true)
    }
  }

  const handleMouseMove = (
    event:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    if (drawing) {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')
      if (canvas && ctx) {
        const { offsetX, offsetY } = getCoordinates(event)
        ctx.lineTo(offsetX, offsetY)
        if (isEraser) {
          ctx.strokeStyle = '#F5F5F5' // Use white color for eraser
        } else {
          ctx.strokeStyle = color
        }
        ctx.lineWidth = brushSize
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.stroke()
      }
    }
  }

  const handleMouseUp = () => {
    if (drawing && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        const newHistory = [...history, ctx]
        setHistory(newHistory)
      }
    }
    setDrawing(false)
  }

  const getCoordinates = (
    event:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    let offsetX = 0
    let offsetY = 0
    const canvas = canvasRef.current
    if (canvas) {
      const rect = canvas.getBoundingClientRect()
      if (event.nativeEvent instanceof MouseEvent) {
        offsetX = event.nativeEvent.offsetX
        offsetY = event.nativeEvent.offsetY
      } else if (event.nativeEvent instanceof TouchEvent) {
        const touch = event.nativeEvent.touches[0]
        offsetX = touch.clientX - rect.left
        offsetY = touch.clientY - rect.top
      }
    }
    return { offsetX, offsetY }
  }
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      ctx.fillStyle = 'whitesmoke'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  }, [])
  useEffect(() => {
    const disableScroll = (event: TouchEvent) => {
      event.preventDefault()
    }

    if (drawing) {
      document.body.addEventListener('touchmove', disableScroll, {
        passive: false,
      })
    } else {
      document.body.removeEventListener('touchmove', disableScroll)
    }

    return () => {
      document.body.removeEventListener('touchmove', disableScroll)
    }
  }, [drawing])

  const handleToggleEraser = () => {
    setIsEraser((prevIsEraser) => !prevIsEraser)
  }

  return (
    <div className="drawing-board">
      <h1>Deixe sua Assintura</h1>
      <div className="slider">
        <label htmlFor="brushSize"></label>
        <input
          type="range"
          id="brushSize"
          min={1}
          max={20}
          value={brushSize}
          onChange={handleBrushSizeChange}
        />
      </div>
      <div className="Container-Options">
        <div className="color-picker">
          <label htmlFor="color">Color:</label>

          <input
            type="color"
            id="color"
            value={color}
            onChange={handleColorChange}
            style={{ appearance: 'none' }}
          />
        </div>

        <div className="buttons">
          <button className="clear" onClick={handleClearCanvas}>
            <TrashSimple size={24} weight="fill" />
          </button>
          <button className="eraser" onClick={handleToggleEraser}>
            {isEraser ? (
              <PaintBrush size={24} weight="fill" />
            ) : (
              <Eraser size={24} weight="fill" />
            )}
          </button>
        </div>
      </div>

      <canvas
        className="canvaDraw"
        ref={canvasRef}
        width={604}
        height={171}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      />
    </div>
  )
}

export default DrawingBoard
