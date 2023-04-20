import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__row">
                    <div className="footer__left">
                        <h2 className="footer__title">Newsletter</h2>
                        <div className="footer__form">
                            <input type="text" className="form-input" placeholder='Email Address'/>

                        </div>

                        <p className="footer__text1">Sign up to our newsletter for special things and receive 10% off your next order.</p>
                        <p className="footer__text">© 2021 The Glass Huts</p>
                    </div>
                    <div className="footer__right">
                        <div className="footer__right-card">
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_1230)">
                                    <path d="M9.03506 20.604C8.87006 20.273 8.60906 20 8.28506 19.795C7.94706 19.588 7.54806 19.443 7.09206 19.357C6.62806 19.273 6.09206 19.235 5.47106 19.229L2.60406 19.231C2.30606 19.235 2.01406 19.467 1.94406 19.755L0.0150578 28.157C-0.0549422 28.441 0.132058 28.679 0.430058 28.679H1.80306C2.10106 28.679 2.39606 28.448 2.46206 28.157L2.93306 26.117C2.99606 25.833 3.29006 25.596 3.59106 25.596H3.98406C5.66306 25.594 6.96306 25.251 7.89706 24.564C8.83606 23.876 9.29906 22.967 9.29906 21.841C9.29806 21.348 9.21706 20.934 9.03506 20.604ZM6.07406 23.349C5.65906 23.653 5.08206 23.805 4.33806 23.805H4.00206C3.70306 23.805 3.52006 23.569 3.58506 23.281L3.99806 21.497C4.05606 21.211 4.35706 20.974 4.65206 20.976L5.10206 20.973C5.62706 20.973 6.02806 21.064 6.29606 21.24C6.56106 21.414 6.69406 21.691 6.69206 22.058C6.70006 22.616 6.48706 23.045 6.07406 23.349Z" fill="#E9ECE0"/>
                                    <path d="M48.175 19.8871L48.089 19.9131L47.974 19.9291L47.833 19.9071L47.761 19.8371L47.728 19.7271L47.726 19.5621V18.9511H48.185V18.7621H47.726V18.3811H47.499V18.7621H47.345V18.9511H47.499V19.6621L47.605 20.0141L47.917 20.1261L48.048 20.1151L48.187 20.0881V19.8871H48.175Z" fill="#E9ECE0"/>
                                    <path d="M50.304 18.8591L49.976 18.7241L49.734 18.7731L49.488 18.9391L49.345 18.7801L49.113 18.7251L48.89 18.7741L48.679 18.9101V18.7621H48.456V20.0971H48.678V19.1001L48.865 18.9841L49.051 18.9381L49.203 18.9651L49.278 19.0421L49.311 19.1701L49.322 19.3351V20.0981H49.545V19.2441L49.541 19.1731L49.537 19.1081L49.727 18.9871L49.915 18.9401L50.062 18.9671L50.142 19.0441L50.17 19.1731L50.185 19.3361V20.0991H50.409V19.2321L50.304 18.8591Z" fill="#E9ECE0"/>
                                    <path d="M15.656 21.8049C15.138 21.5129 14.32 21.3669 13.202 21.3669C12.649 21.3669 12.098 21.4099 11.541 21.4959C11.13 21.5589 11.09 21.5709 10.837 21.6259C10.315 21.7399 10.233 22.2609 10.233 22.2609L10.065 22.9519C9.96999 23.3929 10.224 23.3759 10.33 23.3389C10.558 23.2709 10.685 23.2009 11.151 23.0969C11.596 22.9959 12.065 22.9199 12.437 22.9249C12.986 22.9249 13.406 22.9829 13.686 23.1009C13.962 23.2209 14.1 23.4269 14.1 23.7249L14.076 23.9189L13.878 24.0409C13.099 24.0899 12.536 24.1619 11.853 24.2609C11.185 24.3539 10.599 24.5169 10.112 24.7399C9.58899 24.9699 9.20099 25.2789 8.92999 25.6719C8.66799 26.0669 8.53699 26.5459 8.53699 27.1079C8.53699 27.6369 8.72699 28.0739 9.09599 28.4119C9.46699 28.7439 9.95699 28.9059 10.543 28.9059C10.914 28.9039 11.201 28.8749 11.405 28.8259L12.07 28.5969L12.633 28.2849L13.151 27.9429L13.158 27.9529L13.106 28.1729L13.103 28.1819V28.1839C13.047 28.4519 13.209 28.6719 13.47 28.6979L13.475 28.7039H13.499H14.552H14.75L14.768 28.6959C15.042 28.6639 15.299 28.4439 15.359 28.1819L16.36 23.8489L16.412 23.4959L16.436 23.1649C16.44 22.5509 16.175 22.0959 15.656 21.8049ZM13.442 26.6769L13.228 26.9589L12.688 27.2379C12.434 27.3409 12.193 27.3929 11.97 27.3929C11.632 27.3929 11.367 27.3439 11.188 27.2439L10.923 26.7289C10.923 26.4499 10.987 26.2289 11.124 26.0589L11.706 25.6629C11.955 25.5789 12.259 25.5079 12.611 25.4589C12.925 25.4199 13.545 25.3489 13.626 25.3469L13.721 25.5139C13.702 25.6089 13.526 26.3449 13.442 26.6769Z" fill="#E9ECE0"/>
                                    <path d="M40.594 21.8111C40.073 21.5191 39.256 21.3721 38.141 21.3721C37.588 21.3721 37.036 21.4151 36.481 21.5041C36.069 21.5641 36.028 21.5771 35.774 21.6311C35.253 21.7441 35.172 22.2671 35.172 22.2671L35.004 22.9571C34.91 23.3981 35.158 23.3781 35.274 23.3441C35.503 23.2761 35.626 23.2091 36.088 23.1011C36.531 23.0011 37.004 22.9271 37.377 22.9291C37.924 22.9291 38.344 22.9881 38.623 23.1061C38.901 23.2261 39.037 23.4341 39.037 23.7291L39.016 23.9221L38.82 24.0471C38.033 24.0941 37.469 24.1661 36.793 24.2651C36.127 24.3581 35.539 24.5201 35.051 24.7441C34.53 24.9751 34.137 25.2841 33.869 25.6781C33.604 26.0731 33.475 26.5511 33.475 27.1081C33.475 27.6411 33.663 28.0781 34.037 28.4141C34.41 28.7451 34.895 28.9111 35.481 28.9111C35.85 28.9071 36.137 28.8831 36.342 28.8301L37.005 28.6041L37.573 28.2921L38.087 27.9461L38.096 27.9571L38.049 28.1791L38.044 28.1831L38.046 28.1871C37.984 28.4551 38.147 28.6771 38.411 28.7011L38.413 28.7061H38.437C38.61 28.7061 39.208 28.7061 39.493 28.7061H39.687L39.708 28.6991C39.979 28.6661 40.235 28.4461 40.292 28.1811L41.296 23.8541L41.349 23.4991L41.378 23.1671C41.379 22.5551 41.117 22.1021 40.594 21.8111ZM38.385 26.6831L38.162 26.9681L37.627 27.2451C37.373 27.3471 37.131 27.4001 36.912 27.4001C36.563 27.4001 36.305 27.3501 36.131 27.2501L35.863 26.7371C35.863 26.4571 35.928 26.2381 36.059 26.0651C36.192 25.9021 36.395 25.7681 36.647 25.6701C36.893 25.5861 37.197 25.5181 37.551 25.4671C37.863 25.4281 38.481 25.3551 38.561 25.3541L38.658 25.5211C38.644 25.6161 38.467 26.3491 38.385 26.6831Z" fill="#E9ECE0"/>
                                    <path d="M33.969 20.635C33.797 20.302 33.539 20.033 33.213 19.823C32.879 19.615 32.483 19.469 32.02 19.385C31.565 19.304 31.022 19.26 30.405 19.259L27.534 19.261C27.235 19.266 26.948 19.498 26.879 19.783L24.948 28.189C24.878 28.474 25.07 28.71 25.362 28.71L26.737 28.708C27.029 28.71 27.328 28.476 27.397 28.188L27.862 26.147C27.93 25.863 28.225 25.624 28.522 25.626H28.915C30.596 25.626 31.899 25.28 32.837 24.595C33.764 23.902 34.233 22.995 34.233 21.868C34.228 21.377 34.143 20.962 33.969 20.635ZM31.008 23.384C30.594 23.682 30.016 23.834 29.276 23.834H28.934C28.639 23.837 28.448 23.597 28.514 23.311L28.93 21.53C28.991 21.245 29.289 21.006 29.586 21.009L30.031 21.006C30.559 21.009 30.955 21.096 31.225 21.272C31.494 21.448 31.621 21.724 31.624 22.09C31.627 22.648 31.42 23.078 31.008 23.384Z" fill="#E9ECE0"/>
                                    <path d="M45.742 19.85C45.805 19.563 45.625 19.33 45.33 19.334H44.1C43.848 19.334 43.621 19.521 43.51 19.751L43.442 19.857L43.38 20.129L41.661 27.943L41.605 28.183L41.607 28.189C41.55 28.446 41.708 28.64 41.952 28.677L41.973 28.706H43.25C43.5 28.706 43.735 28.516 43.842 28.282L43.908 28.182L45.746 19.851L45.742 19.85Z" fill="#E9ECE0"/>
                                    <path d="M24.986 21.472C24.661 21.476 23.34 21.472 23.34 21.472C23.044 21.472 22.664 21.711 22.476 21.996C22.476 21.996 20.51 25.37 20.319 25.709L20.091 25.706L19.479 22.019C19.411 21.729 19.108 21.481 18.731 21.481L17.501 21.483C17.205 21.483 17.023 21.719 17.09 22.007C17.09 22.007 18.024 27.322 18.211 28.573C18.298 29.263 18.2 29.386 18.2 29.386L16.984 31.504C16.804 31.792 16.901 32.027 17.196 32.027L18.618 32.025C18.914 32.025 19.303 31.792 19.479 31.503L24.949 22.251C24.949 22.252 25.475 21.461 24.986 21.472Z" fill="#E9ECE0"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_1230">
                                        <rect width="50.409" height="50.409" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className="footer__right-card">
                            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_1202)">
                                    <path d="M33.933 9.71606C30.192 9.71706 26.782 11.1351 24.212 13.4641C21.64 11.1381 18.232 9.71907 14.495 9.71907C14.464 9.71907 14.432 9.71907 14.402 9.71907C6.444 9.77107 0 16.2451 0 24.2141C0 32.2151 6.494 38.7081 14.494 38.7081C18.231 38.7081 21.639 37.2911 24.21 34.9631C23.673 34.4781 23.187 33.9411 22.728 33.3791H25.721C25.27 33.9321 24.778 34.4501 24.249 34.9321H24.247C24.235 34.9451 24.222 34.9531 24.21 34.9641C26.783 37.2941 30.195 38.7141 33.938 38.7131C41.943 38.7101 48.43 32.2181 48.428 24.2141C48.428 24.2111 48.428 24.2091 48.428 24.2071C48.429 16.2031 41.938 9.71406 33.933 9.71606ZM22.894 14.9611H25.649C26.055 15.4531 26.432 15.9711 26.774 16.5131H21.859C22.176 15.9951 22.524 15.4621 22.894 14.9611ZM21.003 18.0351H27.61C27.845 18.5371 28.053 19.0561 28.235 19.5881H20.22C20.3 19.4381 20.58 18.8341 21.003 18.0351ZM5.917 27.9061L6.796 22.3641L4.813 27.9061H3.75L3.612 22.3641L2.673 27.9061H1.184L2.418 20.5561H4.67L4.749 25.0661L6.27 20.5561H8.713L7.496 27.9061H5.917ZM11.182 27.8941L11.233 27.3071C11.209 27.3101 10.739 28.0161 9.65 28.0161C9.08 28.0161 8.16 27.7051 8.16 26.3531C8.16 24.6341 9.562 24.0641 10.897 24.0641C11.107 24.0641 11.56 24.1021 11.56 24.1021C11.56 24.1021 11.611 23.9971 11.611 23.7131C11.611 23.2461 11.191 23.1821 10.616 23.1821C9.603 23.1821 8.934 23.4531 8.934 23.4531L9.158 22.1231C9.158 22.1231 9.97 21.7831 11.027 21.7831C11.574 21.7831 13.147 21.8411 13.147 23.6441L12.541 27.8941H11.182ZM16.925 26.0221C16.925 28.0731 14.938 27.9851 14.591 27.9851C13.296 27.9851 12.896 27.8061 12.859 27.7961L13.065 26.4461C13.067 26.4341 13.715 26.6811 14.436 26.6811C14.852 26.6811 15.392 26.6401 15.392 26.1431C15.392 25.3991 13.46 25.5771 13.46 23.8101C13.46 22.2511 14.618 21.7951 15.76 21.7951C16.642 21.7951 17.184 21.9161 17.184 21.9161L16.989 23.2781C16.989 23.2781 16.152 23.2091 15.935 23.2091C15.386 23.2091 15.087 23.3291 15.087 23.7131C15.086 24.4851 16.925 24.1071 16.925 26.0221ZM19.311 26.5601C19.448 26.5601 19.603 26.5131 19.709 26.5131L19.516 27.8241C19.361 27.8671 18.922 28.0231 18.359 28.0271C17.64 28.0331 17.129 27.6311 17.129 26.7191C17.129 26.1071 18.006 21.0641 18.04 21.0311H19.583L19.426 21.9331H20.196L19.999 23.3861H19.182L18.748 26.0631C18.715 26.2761 18.774 26.5601 19.311 26.5601ZM22.705 21.7631C24.399 21.7631 24.906 23.0031 24.906 24.0201C24.906 24.4271 24.702 25.4271 24.702 25.4271H21.566C21.566 25.4271 21.276 26.6621 22.933 26.6621C23.71 26.6621 24.572 26.2821 24.572 26.2821L24.3 27.7691C24.3 27.7691 23.802 28.0231 22.67 28.0231C21.443 28.0231 20.004 27.5041 20.004 25.3241C20.005 23.4351 21.153 21.7631 22.705 21.7631ZM26.792 31.8861H21.65C21.337 31.3861 21.045 30.8731 20.794 30.3341H27.637C27.385 30.8701 27.103 31.3881 26.792 31.8861ZM26.447 27.9171H24.863L25.826 21.9351H27.263L27.125 22.8021C27.125 22.8021 27.637 21.8591 28.328 21.8591C28.529 21.8591 28.626 21.8791 28.626 21.8791C28.421 22.2971 28.24 22.6801 28.052 23.6691C26.98 23.2891 26.898 25.3621 26.447 27.9171ZM32.482 27.8241C32.482 27.8241 31.652 28.0361 31.132 28.0361C29.29 28.0361 28.355 26.7651 28.355 24.8401C28.355 21.9371 30.088 20.3911 31.869 20.3911C32.674 20.3911 33.607 20.7691 33.607 20.7691L33.355 22.4041C33.355 22.4041 32.724 21.9631 31.939 21.9631C30.889 21.9631 29.947 22.9651 29.947 24.7861C29.947 25.6831 30.386 26.5191 31.482 26.5191C32.003 26.5191 32.758 26.1401 32.758 26.1401L32.482 27.8241ZM36.197 27.8971L36.249 27.3061C36.224 27.3091 35.754 28.0151 34.666 28.0151C34.096 28.0151 33.176 27.7041 33.176 26.3521C33.176 24.6331 34.578 24.0631 35.912 24.0631C36.122 24.0631 36.576 24.1011 36.576 24.1011C36.576 24.1011 36.628 23.9971 36.628 23.7131C36.628 23.2461 36.208 23.1821 35.632 23.1821C34.619 23.1821 33.951 23.4531 33.951 23.4531L34.175 22.1231C34.175 22.1231 34.987 21.7831 36.045 21.7831C36.591 21.7831 38.165 21.8411 38.164 23.6441L37.558 27.8941C37.557 27.8971 36.197 27.8971 36.197 27.8971ZM39.404 27.9171H37.82L38.783 21.9351H40.221L40.083 22.8021C40.083 22.8021 40.596 21.8591 41.287 21.8591C41.488 21.8591 41.584 21.8791 41.584 21.8791C41.38 22.2971 41.197 22.6801 41.01 23.6691C39.937 23.2891 39.855 25.3621 39.404 27.9171ZM44.133 27.9011L44.2 27.3501C44.2 27.3501 43.688 27.9961 42.762 27.9961C41.479 27.9961 40.85 26.7571 40.85 25.4911C40.85 23.5331 42.028 21.8261 43.442 21.8261C44.352 21.8281 44.933 22.6311 44.933 22.6311L45.267 20.5661L46.814 20.5631L45.634 27.9011H44.133ZM47.185 27.6941C47.144 27.7681 47.086 27.8251 47.012 27.8691C46.939 27.9101 46.861 27.9311 46.779 27.9311C46.699 27.9311 46.622 27.9101 46.548 27.8691C46.474 27.8251 46.416 27.7681 46.375 27.6941C46.333 27.6191 46.313 27.5431 46.313 27.4621C46.313 27.3801 46.334 27.3021 46.375 27.2281C46.416 27.1541 46.477 27.0941 46.55 27.0541C46.626 27.0131 46.701 26.9921 46.779 26.9921C46.859 26.9921 46.935 27.0131 47.009 27.0541C47.085 27.0951 47.143 27.1521 47.185 27.2281C47.228 27.3031 47.247 27.3811 47.247 27.4621C47.247 27.5431 47.227 27.6201 47.185 27.6941Z" fill="#E9ECE0"/>
                                    <path d="M47.061 32.117C47.051 32.11 47.042 32.099 47.026 32.093C47.01 32.087 46.985 32.084 46.946 32.084H46.852V32.234H46.952C46.999 32.234 47.03 32.23 47.048 32.213C47.065 32.199 47.073 32.182 47.073 32.158C47.073 32.142 47.069 32.131 47.061 32.117Z" fill="#E9ECE0"/>
                                    <path d="M47.384 32.027C47.341 31.949 47.282 31.894 47.207 31.853C47.132 31.812 47.056 31.791 46.978 31.791C46.898 31.791 46.822 31.812 46.748 31.853C46.674 31.894 46.613 31.951 46.572 32.027C46.529 32.101 46.51 32.179 46.51 32.259C46.51 32.339 46.531 32.418 46.572 32.491C46.615 32.565 46.673 32.625 46.746 32.666C46.82 32.707 46.898 32.728 46.98 32.728C47.06 32.728 47.138 32.707 47.211 32.666C47.284 32.625 47.343 32.565 47.384 32.491C47.426 32.418 47.446 32.34 47.446 32.259C47.446 32.178 47.425 32.1 47.384 32.027ZM47.096 32.519L47.052 32.44C47.017 32.378 46.988 32.337 46.966 32.321C46.952 32.311 46.93 32.303 46.902 32.303H46.855V32.518H46.773V32.013H46.947C47.007 32.013 47.05 32.018 47.074 32.028C47.101 32.038 47.124 32.052 47.138 32.077C47.154 32.1 47.161 32.125 47.161 32.151C47.161 32.188 47.147 32.219 47.122 32.248C47.096 32.274 47.06 32.291 47.017 32.294C47.035 32.3 47.049 32.31 47.06 32.321C47.081 32.341 47.105 32.374 47.135 32.42L47.197 32.519H47.096Z" fill="#E9ECE0"/>
                                    <path d="M11.022 25.2109C9.89099 25.2109 9.66199 25.7189 9.66199 26.1419C9.66199 26.3599 9.78699 26.7239 10.266 26.7239C11.195 26.7239 11.388 25.5059 11.358 25.2469C11.314 25.2379 11.286 25.2119 11.022 25.2109Z" fill="#E9ECE0"/>
                                    <path d="M22.711 23.144C21.87 23.144 21.708 24.101 21.708 24.202H23.421C23.421 24.125 23.582 23.144 22.711 23.144Z" fill="#E9ECE0"/>
                                    <path d="M43.709 23.311C43.03 23.311 42.493 24.099 42.494 25.296C42.494 26.026 42.754 26.494 43.31 26.494C44.146 26.494 44.549 25.403 44.549 24.59C44.549 23.693 44.264 23.311 43.709 23.311Z" fill="#E9ECE0"/>
                                    <path d="M47.115 27.268C47.08 27.206 47.031 27.158 46.969 27.123C46.907 27.088 46.844 27.071 46.778 27.071C46.714 27.071 46.649 27.089 46.587 27.123C46.525 27.155 46.476 27.205 46.441 27.268C46.406 27.331 46.388 27.398 46.388 27.463C46.388 27.53 46.406 27.596 46.439 27.657C46.476 27.719 46.523 27.766 46.585 27.803C46.647 27.837 46.711 27.857 46.778 27.857C46.845 27.857 46.911 27.837 46.971 27.803C47.033 27.768 47.081 27.72 47.117 27.657C47.152 27.595 47.168 27.53 47.168 27.463C47.168 27.397 47.15 27.331 47.115 27.268ZM46.898 27.72L46.853 27.642C46.818 27.579 46.79 27.539 46.769 27.524C46.752 27.511 46.732 27.505 46.703 27.505H46.657V27.719H46.573V27.215H46.748C46.807 27.215 46.851 27.22 46.876 27.231C46.901 27.24 46.923 27.257 46.94 27.279C46.957 27.301 46.963 27.326 46.963 27.353C46.963 27.39 46.949 27.421 46.923 27.449C46.897 27.478 46.861 27.49 46.819 27.495C46.839 27.503 46.852 27.512 46.862 27.521C46.883 27.542 46.907 27.572 46.936 27.62L46.998 27.72H46.898Z" fill="#E9ECE0"/>
                                    <path d="M36.039 25.2109C34.908 25.2109 34.679 25.7189 34.679 26.1419C34.679 26.3599 34.803 26.7239 35.283 26.7239C36.212 26.7239 36.404 25.5059 36.375 25.2469C36.33 25.2379 36.302 25.2119 36.039 25.2109Z" fill="#E9ECE0"/>
                                    <path d="M46.864 27.318C46.856 27.308 46.845 27.3 46.83 27.293C46.813 27.288 46.788 27.283 46.748 27.283V27.284H46.657V27.436H46.756C46.803 27.436 46.834 27.43 46.853 27.415C46.868 27.4 46.877 27.381 46.877 27.359C46.877 27.342 46.873 27.332 46.864 27.318Z" fill="#E9ECE0"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_1202">
                                        <rect width="48.428" height="48.428" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className="footer__right-card">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_1186)">
                                    <path d="M19.153 16.7991L16.722 31.0651H20.61L23.043 16.7991H19.153Z" fill="#E9ECE0"/>
                                    <path d="M13.462 16.815L9.654 26.544L9.248 25.075C8.497 23.305 6.365 20.763 3.862 19.161L7.344 31.058L11.458 31.051L17.581 16.812L13.462 16.815Z" fill="#E9ECE0"/>
                                    <path d="M7.772 17.836C7.546 16.967 6.891 16.708 6.078 16.677H0.05L0 16.961C4.691 18.099 7.795 20.841 9.083 24.138L7.772 17.836Z" fill="#E9ECE0"/>
                                    <path d="M30.923 19.534C32.195 19.514 33.117 19.792 33.833 20.08L34.184 20.245L34.71 17.153C33.94 16.864 32.733 16.554 31.227 16.554C27.385 16.554 24.677 18.489 24.656 21.262C24.631 23.311 26.585 24.455 28.061 25.138C29.576 25.838 30.084 26.283 30.077 26.908C30.065 27.863 28.869 28.301 27.752 28.301C26.195 28.301 25.368 28.086 24.091 27.554L23.59 27.326L23.043 30.519C23.953 30.918 25.632 31.261 27.375 31.279C31.462 31.279 34.118 29.367 34.146 26.404C34.163 24.783 33.126 23.546 30.879 22.531C29.519 21.869 28.687 21.429 28.695 20.761C28.695 20.168 29.401 19.534 30.923 19.534Z" fill="#E9ECE0"/>
                                    <path d="M44.688 16.8149H41.684C40.751 16.8149 40.057 17.0689 39.647 17.9989L33.874 31.0729H37.957C37.957 31.0729 38.623 29.3149 38.774 28.9299C39.221 28.9299 43.188 28.9359 43.753 28.9359C43.869 29.4339 44.227 31.0729 44.227 31.0729H47.834L44.688 16.8149ZM39.893 26.0099C40.213 25.1909 41.442 22.0229 41.442 22.0229C41.421 22.0619 41.759 21.1979 41.96 20.6609L42.222 21.8909C42.222 21.8909 42.967 25.2969 43.123 26.0099H39.893Z" fill="#E9ECE0"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_1186">
                                        <rect width="47.834" height="47.834" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className="footer__right-card">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_1143)">
                                    <path d="M5.85298 22.2021C6.18698 22.0351 6.83498 21.7121 6.83498 20.5611C6.83498 19.7351 6.33298 18.5061 4.36798 18.5061H0.474976V26.5191H3.86798C5.50898 26.5191 5.94398 26.2401 6.40098 25.7911C6.82298 25.3811 7.09098 24.7761 7.09098 24.1431C7.09098 23.3501 6.83498 22.5691 5.85298 22.2021ZM2.08298 19.8931H4.00298C4.76098 19.8931 5.22998 20.0931 5.22998 20.7511C5.22998 21.3891 4.70698 21.6451 4.04598 21.6451H2.08298V19.8931ZM4.13398 25.1351H2.08298V22.9921H4.21398C4.81798 22.9921 5.41898 23.2631 5.41898 23.9631C5.41698 24.7761 4.94798 25.1351 4.13398 25.1351Z" fill="#E9ECE0"/>
                                    <path d="M0.476013 27.7881V28.5161H1.71601V31.8931H2.57101V28.5161H3.81401V27.7881H0.476013Z" fill="#E9ECE0"/>
                                    <path d="M28.066 21.7869L31.336 18.5049H29.172L26.114 21.7619V18.5049H24.44V26.5159H26.114V23.8049L26.895 23.0009L29.371 26.5159H31.525L28.066 21.7869Z" fill="#E9ECE0"/>
                                    <path d="M12.361 18.5049H10.431L7.57703 26.5169H9.33903L9.89603 24.8669H12.853L13.367 26.5159H15.185L12.361 18.5049ZM10.342 23.4809L11.369 20.3129H11.392L12.384 23.4809H10.342Z" fill="#E9ECE0"/>
                                    <path d="M19.829 2.805C19.327 2.212 18.774 1.659 18.124 1.18C17.802 0.938 17.458 0.715 17.081 0.515C16.701 0.319 16.312 0.13 15.847 0C15.855 0.483 15.939 0.908 16.038 1.324C16.132 1.728 16.259 2.107 16.407 2.471C16.053 2.575 15.623 2.721 15.139 2.909C14.826 3.049 14.483 3.175 14.137 3.362C13.786 3.53 13.43 3.734 13.069 3.962C12.702 4.169 12.36 4.463 12.001 4.717C11.674 5.028 11.315 5.297 11.024 5.65C10.723 5.988 10.429 6.326 10.202 6.71C10.087 6.897 9.95403 7.07 9.85803 7.261C9.76603 7.455 9.67803 7.648 9.59203 7.836C9.39703 8.2 9.30803 8.592 9.20603 8.949C9.08503 9.303 9.04203 9.65 9.00903 9.97C8.98203 10.289 8.91503 10.571 8.93103 10.831C8.93903 11.087 8.94503 11.309 8.95103 11.493C8.96203 11.856 8.96503 12.063 8.96503 12.063C8.96503 12.063 9.00403 11.858 9.07003 11.501C9.10303 11.324 9.14403 11.111 9.19103 10.865C9.22803 10.62 9.35503 10.36 9.44303 10.073C9.53703 9.786 9.64603 9.48 9.82603 9.186C9.99003 8.887 10.139 8.564 10.381 8.285C10.49 8.142 10.602 7.994 10.713 7.847C10.83 7.704 10.98 7.581 11.109 7.447C11.363 7.17 11.673 6.946 11.98 6.724C12.273 6.491 12.63 6.334 12.939 6.143C13.291 6.002 13.601 5.826 13.947 5.724C14.277 5.604 14.602 5.503 14.92 5.431C15.229 5.341 15.54 5.301 15.811 5.243C15.985 5.218 16.145 5.197 16.299 5.178C16.281 5.224 16.262 5.268 16.246 5.315C16.088 5.748 15.965 6.203 15.879 6.682C15.84 6.925 15.808 7.171 15.783 7.422C15.763 7.677 15.759 7.941 15.777 8.219C16.038 8.119 16.275 8.006 16.5 7.883C16.717 7.756 16.93 7.624 17.133 7.488C17.536 7.211 17.899 6.91 18.227 6.588C18.891 5.946 19.44 5.229 19.901 4.458L19.96 4.36C20.243 3.881 20.21 3.254 19.829 2.805Z" fill="#E9ECE0"/>
                                    <path d="M7.57801 30.9651C7.57801 30.1991 7.39401 30.0731 7.05701 29.9251C7.46301 29.7881 7.69201 29.4011 7.69201 28.9461C7.69201 28.5921 7.49301 27.7871 6.40101 27.7871H4.32501V31.8901H5.16701V30.2851H6.05201C6.68701 30.2851 6.72201 30.5031 6.72201 31.0611C6.72201 31.4831 6.75501 31.6971 6.81201 31.8891H7.76101V31.7821C7.57801 31.7141 7.57801 31.5641 7.57801 30.9651ZM6.16901 29.5961H5.16601V28.4961H6.23401C6.73601 28.4961 6.83401 28.8141 6.83401 29.0331C6.83301 29.4371 6.61701 29.5961 6.16901 29.5961Z" fill="#E9ECE0"/>
                                    <path d="M23.339 28.5161V27.7881H20.419V31.8941H21.277V30.1681H23.083V29.4421H21.277V28.5161H23.339Z" fill="#E9ECE0"/>
                                    <path d="M24.755 31.165V30.105H26.755V29.379H24.755V28.517H26.934V27.79H23.915V31.893H27.03V31.165H24.755Z" fill="#E9ECE0"/>
                                    <path d="M18.691 29.553L17.693 29.307C17.521 29.266 17.257 29.197 17.257 28.877C17.257 28.506 17.648 28.387 17.972 28.387C18.722 28.387 18.791 28.82 18.814 29.003H19.634C19.628 28.5 19.292 27.678 18.034 27.678C16.702 27.678 16.457 28.483 16.457 28.94C16.457 29.844 17.096 29.995 17.76 30.147L18.199 30.251C18.632 30.356 18.942 30.44 18.942 30.762C18.942 31.191 18.489 31.291 18.086 31.291C17.336 31.291 17.221 30.857 17.215 30.628H16.395C16.395 31.139 16.65 32 18.148 32C18.506 32 19.765 31.888 19.765 30.657C19.764 29.92 19.25 29.689 18.691 29.553Z" fill="#E9ECE0"/>
                                    <path d="M30.982 30.9651C30.982 30.1991 30.796 30.0731 30.461 29.9251C30.865 29.7881 31.098 29.4011 31.098 28.9461C31.098 28.5921 30.897 27.7871 29.805 27.7871H27.731V31.8901H28.573V30.2851H29.458C30.091 30.2851 30.128 30.5031 30.128 31.0611C30.128 31.4831 30.161 31.6971 30.219 31.8891H31.165V31.7821C30.982 31.7141 30.982 31.5641 30.982 30.9651ZM29.576 29.5961H28.572V28.4961H29.638C30.142 28.4961 30.24 28.8141 30.24 29.0331C30.24 29.4371 30.023 29.5961 29.576 29.5961Z" fill="#E9ECE0"/>
                                    <path d="M21.145 18.5081V24.0861H21.124L17.943 18.5081H16.18V26.5201H17.742L17.744 20.8081H17.765L21.035 26.5211H22.707V18.5081H21.145Z" fill="#E9ECE0"/>
                                    <path d="M10.474 27.7881H9.48302L8.02002 31.8911H8.92402L9.20902 31.0441H10.723L10.987 31.8911H11.919L10.474 27.7881ZM9.43902 30.3361L9.96602 28.7141H9.97402L10.486 30.3361H9.43902Z" fill="#E9ECE0"/>
                                    <path d="M14.976 27.7881L14.975 30.6441H14.965L13.334 27.7881H12.432V31.8911H13.231V28.9641H13.244L14.918 31.8911H15.777V27.7881H14.976Z" fill="#E9ECE0"/>
                                    <path d="M21.957 5.66004C21.938 5.29804 21.922 5.09204 21.922 5.09204C21.922 5.09204 21.893 5.29704 21.832 5.65604C21.803 5.83304 21.77 6.04804 21.731 6.29504C21.701 6.54104 21.582 6.80404 21.502 7.09404C21.419 7.38404 21.32 7.69204 21.148 7.99204C20.994 8.29604 20.855 8.62204 20.621 8.90904C20.517 9.05604 20.41 9.20604 20.304 9.35804C20.189 9.50304 20.045 9.63104 19.916 9.76904C19.672 10.052 19.369 10.287 19.068 10.517C18.785 10.759 18.431 10.925 18.127 11.126C17.781 11.277 17.476 11.463 17.133 11.574C16.808 11.705 16.485 11.815 16.169 11.896C15.864 11.996 15.556 12.045 15.286 12.11C15.113 12.141 14.952 12.167 14.8 12.19C14.814 12.143 14.833 12.099 14.849 12.052C14.993 11.613 15.103 11.155 15.175 10.674C15.206 10.43 15.229 10.183 15.247 9.93104C15.26 9.67604 15.256 9.41104 15.231 9.13504C14.973 9.24104 14.739 9.36204 14.518 9.49204C14.303 9.62504 14.098 9.76304 13.897 9.90504C13.505 10.194 13.151 10.505 12.833 10.838C12.189 11.499 11.662 12.232 11.224 13.017L11.167 13.115C10.898 13.603 10.95 14.228 11.345 14.666C11.865 15.243 12.435 15.78 13.097 16.239C13.425 16.472 13.776 16.684 14.161 16.872C14.544 17.058 14.938 17.236 15.409 17.351C15.384 16.87 15.286 16.448 15.179 16.035C15.072 15.634 14.935 15.258 14.775 14.899C15.127 14.784 15.55 14.626 16.029 14.424C16.337 14.276 16.676 14.138 17.017 13.941C17.361 13.764 17.713 13.549 18.062 13.31C18.422 13.092 18.756 12.788 19.109 12.523C19.426 12.204 19.777 11.922 20.058 11.562C20.349 11.215 20.631 10.87 20.847 10.479C20.957 10.288 21.082 10.111 21.174 9.91704C21.258 9.72004 21.342 9.52504 21.422 9.33404C21.606 8.96404 21.684 8.56904 21.776 8.21004C21.884 7.85404 21.92 7.50504 21.942 7.18504C21.963 6.86604 22.018 6.58104 21.996 6.32204C21.979 6.06704 21.967 5.84404 21.957 5.66004Z" fill="#E9ECE0"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_1143">
                                        <rect width="32" height="32" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;