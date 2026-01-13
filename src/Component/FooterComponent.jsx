import React from 'react'

function FooterComponent() {
    return (
        <div>
            <footer className='footer'>
                <span>All rights reserved &copy; {new Date().getFullYear()}</span>
            </footer>
        </div>
    )
}

export default FooterComponent
