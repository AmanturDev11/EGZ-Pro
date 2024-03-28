import { FC } from 'react'
import scss from './Input.module.scss'


interface InputProps {
  value: string
  setData: (value: string) => void
  type: string

}
export const Input: FC<InputProps> = ({type, value, setData}) => {
  return <input type={type} value={value} onChange={(e) => setData(e.target.value)} />
}
