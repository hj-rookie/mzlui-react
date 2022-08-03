import React, { CSSProperties } from 'react'
import classNames from 'classnames'
export type InputProps = {
  style?: CSSProperties
  className?: string
  title: string
}
function Input(props: InputProps): JSX.Element {
  const {
    style,
    className,
    title
  } = props
  const prefixClsChild = 'input-inner'
  const cls1 = classNames({
    [prefixClsChild]: true,
    [className || '']: !!className
  })
  return (
    <div className={cls1} style={style ? style : undefined}>
      <p>{title}</p>
    </div>
  )
}
export default Input
