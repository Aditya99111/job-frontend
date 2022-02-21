import React from 'react'
import Link from 'next/link'

const CreateAcc = () => {
    return (
        <div class="wrapper">
            <div class="logo">
                <img src="https://cdn-images-1.medium.com/max/1200/1*FfEOiku2EkgoQy_bf8UL6A.png" alt="logo here" />
            </div>
            <div class="title">
                <p>Create a Account</p>
            </div>

            <div class="form">
                <div class="input_field">
                    <label>Name</label>
                    <input type="text" class="input" />
                </div>
                <div class="input_field">
                    <label>Email address</label>
                    <input type="email" class="input" />
                </div>
                <div class="input_field">
                    <label>Password</label>
                    <input type="password" class="input" />
                </div>
                <div class="input_field">
                    <label>Confirm Password</label>
                    <input type="password" class="input" />
                </div>
                <div class="icons">
                    <div class="logo">
                        <a href='#'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="logo here" /></a>
                    </div><div class="logo">
                        <a href='#'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" alt="logo here" /></a>
                    </div><div class="logo">
                        <a href='#'> <img src="https://www.citypng.com/public/uploads/preview/-11590303444ezlkboanlo.png" alt="logo here" /></a>
                    </div>
                </div>
                <div class="btn">
                    <input type="submit" value="Sign in" class="sign_btn" />
                </div>
            </div>
            <div class="create_act">
                <p>Already have a account? <Link href="/login">Login.</Link></p>
            </div>

        </div>
    )
}

export default CreateAcc