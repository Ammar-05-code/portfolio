import { jsPDF } from 'jspdf';
import { resumeData } from '../data/resume';

/**
 * Generates a clean, professional, ATS-compliant 1-to-2 page PDF resume
 * and initiates an immediate browser download.
 */
export function generateResumePdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      // Add subtle header rule on subsequent pages
      doc.setDrawColor(200, 205, 215);
      doc.setLineWidth(0.3);
      doc.line(margin, y - 4, pageWidth - margin, y - 4);
    }
  };

  // 1. Header (Candidate Identity)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(20, 28, 42); // Deep slate navy
  doc.text(resumeData.name.toUpperCase(), margin, y + 4);
  y += 9;

  // Title / Target Designation
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 95, 160); // Professional blue accent
  doc.text(resumeData.title.toUpperCase() + ' | B.TECH ARTIFICIAL INTELLIGENCE & DATA SCIENCE', margin, y);
  y += 5;

  // Contact Info Line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(70, 75, 85);
  const contactText = `${resumeData.location}  •  ${resumeData.phone}  •  ${resumeData.email}  •  ${resumeData.linkedin}  •  ${resumeData.github}`;
  doc.text(contactText, margin, y);
  y += 4;

  // Horizontal separator
  doc.setDrawColor(30, 95, 160);
  doc.setLineWidth(0.8);
  doc.line(margin, y, pageWidth - margin, y);
  y += 5;

  // Section Heading Helper
  const drawSectionHeader = (title: string) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(20, 28, 42);
    doc.text(title.toUpperCase(), margin, y);

    // Section line
    doc.setDrawColor(210, 215, 225);
    doc.setLineWidth(0.4);
    doc.line(margin, y + 1.5, pageWidth - margin, y + 1.5);
    y += 5.5;
  };

  // 2. Professional Summary
  drawSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(50, 55, 65);
  const summaryLines = doc.splitTextToSize(resumeData.summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4 + 3;

  // 3. Technical & Analytical Competencies
  drawSectionHeader('Technical & Analytical Competencies');
  resumeData.skills.forEach((skillCat) => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 40, 55);
    const categoryLabel = `${skillCat.category}: `;
    doc.text(categoryLabel, margin, y);
    const labelWidth = doc.getTextWidth(categoryLabel);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 65, 75);
    const skillList = skillCat.items.join('  •  ');
    const skillLines = doc.splitTextToSize(skillList, contentWidth - labelWidth);
    doc.text(skillLines, margin + labelWidth, y);
    y += Math.max(skillLines.length * 4, 4.5);
  });
  y += 2;

  // 4. Professional Experience
  drawSectionHeader('Professional Experience');
  resumeData.experience.forEach((exp) => {
    checkPageBreak(16);
    // Role and Date
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 28, 42);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(80, 85, 95);
    const periodWidth = doc.getTextWidth(exp.period);
    doc.text(exp.period, pageWidth - margin - periodWidth, y);
    y += 4;

    // Company & Location
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 95, 160);
    doc.text(`${exp.company} — ${exp.location}`, margin, y);
    y += 4;

    // Highlights
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(55, 60, 70);
    exp.highlights.forEach((hl) => {
      checkPageBreak(8);
      const bulletIndent = 3;
      doc.text('•', margin + 1, y);
      const hlLines = doc.splitTextToSize(hl, contentWidth - bulletIndent - 2);
      doc.text(hlLines, margin + bulletIndent + 1, y);
      y += hlLines.length * 3.8 + 0.8;
    });
    y += 1.5;
  });

  // 5. Featured Technical Projects
  drawSectionHeader('Engineered Analytical Projects');
  resumeData.projects.forEach((proj) => {
    checkPageBreak(16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 28, 42);
    doc.text(proj.title, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(80, 85, 95);
    const dateWidth = doc.getTextWidth(proj.period);
    doc.text(proj.period, pageWidth - margin - dateWidth, y);
    y += 4;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 95, 160);
    doc.text(proj.subtitle, margin, y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(55, 60, 70);
    proj.highlights.forEach((hl) => {
      checkPageBreak(8);
      const bulletIndent = 3;
      doc.text('•', margin + 1, y);
      const hlLines = doc.splitTextToSize(hl, contentWidth - bulletIndent - 2);
      doc.text(hlLines, margin + bulletIndent + 1, y);
      y += hlLines.length * 3.8 + 0.8;
    });
    y += 1.5;
  });

  // 6. Education
  drawSectionHeader('Education');
  resumeData.education.forEach((edu) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(20, 28, 42);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(80, 85, 95);
    const periodWidth = doc.getTextWidth(edu.period);
    doc.text(edu.period, pageWidth - margin - periodWidth, y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(60, 65, 75);
    doc.text(`${edu.institution} — ${edu.location}`, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 95, 160);
    const scoreText = `Score: ${edu.score}`;
    const scoreWidth = doc.getTextWidth(scoreText);
    doc.text(scoreText, pageWidth - margin - scoreWidth, y);
    y += 4.5;
  });
  y += 1;

  // 7. Certifications & Honors
  drawSectionHeader('Certifications & Honors');
  resumeData.certifications.forEach((cert) => {
    checkPageBreak(6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(50, 55, 65);
    doc.text(`•  ${cert.title} — ${cert.issuer} (${cert.date})`, margin + 1, y);
    y += 4;
  });

  resumeData.achievements.forEach((ach) => {
    checkPageBreak(6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(50, 55, 65);
    doc.text(`•  ${ach}`, margin + 1, y);
    y += 4;
  });

  // Save/Download PDF
  doc.save('Mohammed_Ammar_Resume.pdf');
}
