import { FC } from 'react'
import { Spinner } from 'react-bootstrap'

interface ILoadingProps {}

const Loading: FC<ILoadingProps> = () => {
  return (
    <div className='text-center'>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loading