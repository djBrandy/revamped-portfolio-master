import sys
from docx import Document
from docx.shared import Pt
from fpdf import FPDF

def create_resume_docx():
    doc = Document()
    
    # Header
    title = doc.add_heading('Brandon Dando', 0)
    subtitle = doc.add_paragraph('Full-Stack Developer | RF Engineer | Technical Mentor')
    subtitle.alignment = 1
    
    contact = doc.add_paragraph()
    contact.add_run('Nairobi County | 0112607179 | dandobrandon0@gmail.com\n')
    contact.add_run('LinkedIn: https://www.linkedin.com/in/timon-dando-b713a5261/ | GitHub: https://github.com/djBrandy')
    contact.alignment = 1

    # Summary
    doc.add_heading('Professional Summary', level=1)
    doc.add_paragraph(
        "Bold Engineer and Hacker operating at the intersection of software elegance and hardware curiosity. "
        "Co-founder of ASENASS Developers with a proven track record of building scalable web applications, "
        "REST APIs, and custom learning platforms. Expert in Python/Flask and React, with a deep-seated passion "
        "for RF engineering and embedded systems."
    )

    # Skills
    doc.add_heading('Technical Skills', level=1)
    p = doc.add_paragraph(style='List Bullet')
    p.add_run('Software Engineering:').bold = True
    p.add_run(' Python (3+ yrs), Flask, React, SQL Alchemy, REST APIs, JavaScript, WebSocket, Docker.')
    
    p = doc.add_paragraph(style='List Bullet')
    p.add_run('Hardware & RF:').bold = True
    p.add_run(' RF Engineering, SDR Analysis, BLE Systems, Embedded C++, Signal Processing, Arduino/ESP32.')
    
    p = doc.add_paragraph(style='List Bullet')
    p.add_run('Leadership:').bold = True
    p.add_run(' Technical Mentoring, Team Leadership, Project Management, Training Delivery, Open Source.')

    # Experience
    doc.add_heading('Professional Experience', level=1)
    
    exp1 = doc.add_heading('ASENASS Developers | Co-Founder', level=2)
    doc.add_paragraph('2024 – Present')
    doc.add_paragraph('Architected and built scalable web applications and REST APIs using Python/Flask and React.', style='List Bullet')
    doc.add_paragraph('Developed a custom Learning Management System (LMS) serving 500+ students with real-time progress tracking.', style='List Bullet')
    doc.add_paragraph('Spearheaded the deployment and infrastructure management for multiple production-level projects.', style='List Bullet')

    exp2 = doc.add_heading('ASENASS Academy | Technical Mentor', level=2)
    doc.add_paragraph('2024 – Present')
    doc.add_paragraph('Delivered hands-on training to aspiring developers in version control (Git), CI/CD, and modern software tooling.', style='List Bullet')
    doc.add_paragraph('Mentored 10+ junior developers through project-based learning and code reviews.', style='List Bullet')
    doc.add_paragraph('Curated technical curriculum focusing on full-stack architecture and engineering best practices.', style='List Bullet')

    # Education
    doc.add_heading('Education', level=1)
    doc.add_paragraph('Moringa School | Full-Stack Development', style='List Bullet')
    doc.add_paragraph('Professional Certificate in Software Engineering (2024)', style='List Bullet')

    doc.save('Brandon_Dando_Resume.docx')

def create_resume_pdf():
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Helvetica", "B", 16)
    pdf.cell(0, 10, "Brandon Dando", align="C")
    pdf.ln(10)
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 5, "Nairobi County | 0112607179 | dandobrandon0@gmail.com", align="C")
    pdf.ln(5)
    pdf.cell(0, 5, "LinkedIn: linkedin.com/in/timon-dando-b713a5261/ | GitHub: github.com/djBrandy", align="C")
    pdf.ln(10)

    # Sections
    sections = [
        ("Professional Summary", "Bold Engineer and Hacker operating at the intersection of software elegance and hardware curiosity. Co-founder of ASENASS Developers with a proven track record of building scalable web applications, REST APIs, and custom learning platforms. Expert in Python/Flask and React, with a deep-seated passion for RF engineering and embedded systems."),
        ("Technical Skills", "- Software Engineering: Python (3+ yrs), Flask, React, SQL Alchemy, REST APIs, JavaScript, WebSocket, Docker.\n- Hardware & RF: RF Engineering, SDR Analysis, BLE Systems, Embedded C++, Signal Processing, Arduino/ESP32.\n- Leadership: Technical Mentoring, Team Leadership, Project Management, Training Delivery, Open Source."),
        ("Experience", "ASENASS Developers | Co-Founder (2024 - Present)\n- Architected and built scalable web applications and REST APIs using Python/Flask and React.\n- Developed a custom Learning Management System (LMS) serving 500+ students.\n- Spearheaded deployment and infrastructure management.\n\nASENASS Academy | Technical Mentor (2024 - Present)\n- Delivered training in Git, CI/CD, and modern software tooling.\n- Mentored 10+ junior developers through project-based learning."),
        ("Education", "- Moringa School: Professional Certificate in Software Engineering (2024)")
    ]

    for title, content in sections:
        pdf.set_font("Helvetica", "B", 12)
        pdf.cell(0, 10, title)
        pdf.ln(8)
        pdf.set_font("Helvetica", "", 10)
        pdf.multi_cell(0, 5, content)
        pdf.ln(5)

    pdf.output("Brandon_Dando_Resume.pdf")

def create_cv_docx():
    doc = Document()
    
    # Header
    doc.add_heading('Curriculum Vitae - Brandon Dando', 0)
    p = doc.add_paragraph()
    p.add_run('Nairobi County | 0112607179 | dandobrandon0@gmail.com\n').bold = True
    p.add_run('LinkedIn: https://www.linkedin.com/in/timon-dando-b713a5261/\n')
    p.add_run('GitHub: https://github.com/djBrandy\n')
    p.add_run('Certificate: https://moringa.my.salesforce-sites.com/certificateStatus?id=a0PQ200000ADeYW')
    p.alignment = 1

    # Profile
    doc.add_heading('Professional Profile', level=1)
    doc.add_paragraph(
        "A highly technical and versatile engineer with a unique blend of expertise in high-level software development "
        "and low-level hardware experimentation. As a Co-Founder and Mentor, I have demonstrated leadership in building "
        "both technical systems and human talent. My current focus lies in bridging the gap between digital software "
        "elegance and physical RF signal analysis."
    )

    # Areas of Expertise
    doc.add_heading('Areas of Expertise', level=1)
    doc.add_paragraph('Full-Stack Development: Expert-level Python/Flask backend architecture and React frontend development.', style='List Bullet')
    doc.add_paragraph('Embedded Systems: Designing and hacking wireless systems (BLE, SDR, RF).', style='List Bullet')
    doc.add_paragraph('API Design: Crafting scalable, secure, and well-documented RESTful frameworks.', style='List Bullet')
    doc.add_paragraph('Technical Leadership: Founding startups, mentoring developers, and managing cross-functional technical teams.', style='List Bullet')

    # Experience
    doc.add_heading('Professional Experience', level=1)
    
    doc.add_heading('ASENASS Developers | Co-Founder', level=2)
    doc.add_paragraph('January 2024 – Present')
    doc.add_paragraph('Strategic Leadership: Co-founded the company to bridge the gap in custom technical education and scalable web tools.', style='List Bullet')
    doc.add_paragraph('Architecture: Designed the core architecture for the ASENASS ecosystem, ensuring high availability and scalability.', style='List Bullet')
    doc.add_paragraph('Product Development: Led the development of multiple client projects, from initial discovery to final deployment.', style='List Bullet')

    doc.add_heading('ASENASS Academy | Lead Technical Mentor', level=2)
    doc.add_paragraph('January 2024 – Present')
    doc.add_paragraph('Curriculum Design: Developed comprehensive training modules for Software Engineering, focusing on Git, CI/CD, and Backend Engineering.', style='List Bullet')
    doc.add_paragraph('Mentorship: Conducted 1-on-1 sessions and group workshops for over 50 aspiring engineers.', style='List Bullet')

    # Projects
    doc.add_heading('Technical Projects', level=1)
    doc.add_heading('ASENASS Learning Management System (LMS)', level=2)
    doc.add_paragraph('Utilized Python/Flask for the backend, React for a reactive UI, and WebSockets for low-latency communication. Resulted in 500+ active users.', style='List Bullet')

    doc.add_heading('RF & Signal Analysis Research', level=2)
    doc.add_paragraph('Investigating wireless protocol security and developing tools for real-time frequency analysis using C++, SDR, and ESP32.', style='List Bullet')

    doc.save('Brandon_Dando_CV.docx')

def create_cv_pdf():
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Helvetica", "B", 16)
    pdf.cell(0, 10, "Curriculum Vitae - Brandon Dando", align="C")
    pdf.ln(10)
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 5, "Nairobi County | 0112607179 | dandobrandon0@gmail.com", align="C")
    pdf.ln(5)
    pdf.cell(0, 5, "LinkedIn: linkedin.com/in/timon-dando-b713a5261/ | GitHub: github.com/djBrandy", align="C")
    pdf.ln(10)

    sections = [
        ("Professional Profile", "A highly technical and versatile engineer with a unique blend of expertise in high-level software development and low-level hardware experimentation. As a Co-Founder and Mentor, I have demonstrated leadership in building both technical systems and human talent."),
        ("Areas of Expertise", "- Full-Stack Development: Python/Flask and React.\n- Embedded Systems: BLE, SDR, RF.\n- API Design: Scalable RESTful frameworks.\n- Technical Leadership: Founding startups and mentoring."),
        ("Professional Experience", "ASENASS Developers | Co-Founder (2024 - Present)\n- Strategic Leadership and core ecosystem architecture.\n- Led multiple client projects from discovery to deployment.\n\nASENASS Academy | Lead Technical Mentor (2024 - Present)\n- Developed training modules for Software Engineering.\n- Mentored 50+ engineers."),
        ("Technical Projects", "ASENASS LMS: Flask/React/WebSockets, 500+ users.\nRF Research: Protocol security analysis using C++ and SDR."),
        ("Education", "Moringa School: Professional Certificate in Software Engineering (2024)")
    ]

    for title, content in sections:
        pdf.set_font("Helvetica", "B", 12)
        pdf.cell(0, 10, title)
        pdf.ln(8)
        pdf.set_font("Helvetica", "", 10)
        pdf.multi_cell(0, 5, content)
        pdf.ln(5)

    pdf.output("Brandon_Dando_CV.pdf")

if __name__ == "__main__":
    create_resume_docx()
    create_resume_pdf()
    create_cv_docx()
    create_cv_pdf()
    print("Resume and CV (.docx and .pdf) generated successfully!")
