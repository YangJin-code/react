import React from 'react'

const Main = () => {

    const user ={
        name:'liz',
        isLogin:true

    }
  return (
    <div>
        {user.isLogin?
        <button className='logout'>로그아웃</button> : 
        <button className='login'>로그인</button>
        }
    </div>
  )
}

export default Main