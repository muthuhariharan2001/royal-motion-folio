
import React, { useState, useRef, useEffect } from 'react';

interface DraggableCardProps {
  children: React.ReactNode;
  className?: string;
  id: string;
  style?: React.CSSProperties;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ children, className = '', id, style }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isDropping, setIsDropping] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('input, textarea, button, a')) {
      return; // Don't drag if clicking on form elements or buttons
    }
    
    e.preventDefault();
    const rect = dragRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      const newPosition = {
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      };
      setPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setIsDropping(true);
      
      // Add bounce effect when dropping
      setTimeout(() => {
        setIsDropping(false);
      }, 600);
    }
  };

  // Add global mouse events for better dragging experience
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        const newPosition = {
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        };
        setPosition(newPosition);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setIsDropping(true);
        setTimeout(() => setIsDropping(false), 600);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.cursor = 'grabbing';
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.cursor = 'auto';
    };
  }, [isDragging, dragStart]);

  // Reset position with smooth animation
  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  const cardClasses = `
    draggable-element 
    ${className} 
    ${isDragging ? 'dragging z-50' : ''} 
    ${isDropping ? 'bouncing' : ''}
    ${!isDragging && !isDropping ? 'interactive-hover' : ''}
    glow-effect
  `;

  return (
    <div
      ref={dragRef}
      className={cardClasses}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) ${isDragging ? 'rotate(3deg) scale(1.05)' : ''}`,
        transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: isDragging ? 'grabbing' : 'grab',
        ...style
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDoubleClick={resetPosition}
    >
      {children}
    </div>
  );
};

export default DraggableCard;
