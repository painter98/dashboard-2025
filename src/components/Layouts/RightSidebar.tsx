
const RightSidebar = () => {
    const notifications = [
        {
            id: 1,
            profile: 'user-profile.jpeg',
            message: '<strong class="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
            time: '45 min ago',
        },
        {
            id: 2,
            profile: 'profile-34.jpeg',
            message: '<strong class="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
            time: '9h Ago',
        },
        {
            id: 3,
            profile: 'profile-16.jpeg',
            message: '<strong class="text-sm mr-1">Anna Morgan</strong>Upload a file',
            time: '9h Ago',
        },
    ]

  return (
    <div  className={`bg-white fixed min-h-screen h-full top-0 bottom-0 right-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300`}>
      {notifications?.map((item)=>(
        <div>
            <img src={item?.profile} alt='notification image'/>
            <div>{item?.message}</div>
            <div>{item?.time}</div>
        </div>
      ))}
    </div>
  )
}

export default RightSidebar
