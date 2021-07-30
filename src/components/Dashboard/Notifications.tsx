import { FC } from 'react'

const Notifications: FC = () => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            <li>Notification</li>
            <li>Now turned off</li>
            <li>Because we need</li>
            <li>Premium plan in firebase :)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
