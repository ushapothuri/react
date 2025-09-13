function Profile(){

    const name="usha"
    const age=18
    const isstudent=true
    return (
        <div>
            <p>name:{name}</p>
            <p>age :{age}</p>
            <p>{isstudent===true?"i am a student":"i am not a student"}</p>
        </div>
    )
}

export default Profile;
