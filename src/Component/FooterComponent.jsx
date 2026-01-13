import React from 'react'

function FooterComponent() {
    return (
        <div>
            <footer className='footer bg-dark text-light py-3 mt-auto'>
                <div className='container text-center'>
                    <span className='fw-semibold'>All rights reserved &copy; {new Date().getFullYear()}</span>
                </div>
            </footer>
        </div>
    )
}

export default FooterComponent
