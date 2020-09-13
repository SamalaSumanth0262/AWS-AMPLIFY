import { notification } from 'antd';

const CustomNotification = (type, message, description) => {
  notification[type]({
    message: message,
    description: description
  })

}

export default CustomNotification
