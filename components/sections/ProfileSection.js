const ProfileSection = () => (
  <div className='bg-black'>
    <div className='rounded-md'>
      <div className='p-6'>
        <img className='rounded-lg' src='./img/rick-avatar.png' />
        <div className='p-6 text-white'>
          <h3>profile</h3>
          <dl className='pl-6'>
            <dt>name</dt>
            <dd className='pl-6'>Rick Sanchez</dd>
            <dt>email</dt>
            <dd className='pl-6'>pickle@rick.com</dd>
            <dt>professions</dt>
            <dd className='pl-6'>
              <ul>
                <li>scientist</li>
                <li>inventor</li>
                <li>arms dealer</li>
                <li>store ower</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileSection;
