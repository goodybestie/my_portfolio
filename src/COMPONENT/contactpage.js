import  {  useEffect, forwardRef} from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import Aos from 'aos';

import 'aos/dist/aos.css';


const ContactPage =forwardRef((props, ref) => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // };

useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Handle form submission logic here
  // };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '2px solid #e5e5e5',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box'
  };

  const inputFocusStyle = {
    borderColor: '#4285f4'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px 24px',
    backgroundColor: '#4285f4',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background-color 0.3s ease'
  };

  const socialIconStyle = {
    width: '20px',
    height: '20px',
    color: '#4285f4',
    cursor: 'pointer',
    transition: 'color 0.3s ease'
  };

  const contactInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
    padding: '12px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px'
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "4rem 1rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} ref={ref} >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#1a1a1a",
              margin: "0 0 1rem 0",
            }}
          >
            Let's Work Together
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-grid">
          {/* Contact Form */}
          <div data-aos="fade-up" data-aos-delay="100"
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid #e5e5e5",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1a1a1a",
                margin: "0 0 1.5rem 0",
              }}
            >
              Send Me a Message
            </h2>

            <div data-aos="fade-up" data-aos-delay="100">
              <div className="two-column">
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#555",
                      fontWeight: "500",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) =>
                      Object.assign(e.target.style, inputFocusStyle)
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "#e5e5e5")
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#555",
                      fontWeight: "500",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    style={inputStyle}
                    onFocus={(e) =>
                      Object.assign(e.target.style, inputFocusStyle)
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "#e5e5e5")
                    }
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#555",
                    fontWeight: "500",
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  style={inputStyle}
                  onFocus={(e) =>
                    Object.assign(e.target.style, inputFocusStyle)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#e5e5e5")
                  }
                  required
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#555",
                    fontWeight: "500",
                  }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  rows="5"
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "120px",
                  }}
                  onFocus={(e) =>
                    Object.assign(e.target.style, inputFocusStyle)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#e5e5e5")
                  }
                  required
                />
              </div>

              <button
                type="submit"
                style={buttonStyle}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#3367d6")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#4285f4")
                }
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1a1a1a",
                margin: "0 0 1.5rem 0",
              }}
            >
              Get In Touch
            </h2>

            <div style={{ marginBottom: "2rem" }}>
              <div style={contactInfoStyle}>
                <MdEmail
                  size={20}
                  style={{ color: "#4285f4", minWidth: "20px" }}
                />
                <div>
                  <h4
                    style={{
                      margin: "0 0 0.25rem 0",
                      color: "#1a1a1a",
                      fontSize: "1rem",
                    }}
                  >
                    Email
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      color: "#666",
                      fontSize: "0.9rem",
                    }}
                  >
                    goodnessbassey003@gmail.com
                  </p>
                </div>
              </div>

              <div style={contactInfoStyle}>
                <MdPhone
                  size={20}
                  style={{ color: "#4285f4", minWidth: "20px" }}
                />
                <div>
                  <h4
                    style={{
                      margin: "0 0 0.25rem 0",
                      color: "#1a1a1a",
                      fontSize: "1rem",
                    }}
                  >
                    Phone
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      color: "#666",
                      fontSize: "0.9rem",
                    }}
                  >
                    +234 813130-2861
                  </p>
                </div>
              </div>

              <div style={contactInfoStyle}>
                <div>
                  <h4
                    style={{
                      margin: "0 0 0.25rem 0",
                      color: "#1a1a1a",
                      fontSize: "1rem",
                    }}
                  >
                    Location
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      color: "#666",
                      fontSize: "0.9rem",
                    }}
                  >
                    Uyo, AkwaIbom State
                  </p>
                </div>
              </div>
            </div>

            {/* Follow Me */}
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#1a1a1a",
                  margin: "0 0 1rem 0",
                }}
              >
                Follow Me
              </h3>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <FaTwitter style={socialIconStyle} />
                <FaLinkedin style={socialIconStyle} />
                <FaGithub style={socialIconStyle} />
                <FaFacebook style={socialIconStyle} />
              </div>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                Follow me on social media for updates on my latest projects and
                insights.
              </p>
            </div>

            {/* Quick Response Box */}
            <div
              style={{
                backgroundColor: "#4285f4",
                color: "white",
                padding: "1.5rem",
                borderRadius: "12px",
              }}
            >
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  margin: "0 0 0.75rem 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Quick Response
              </h4>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                  margin: 0,
                  opacity: 0.9,
                }}
              >
                I typically respond within 24 hours. For urgent projects, feel
                free to reach out via phone or LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }

          .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 480px) {
            .two-column {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
}
);

export default ContactPage;