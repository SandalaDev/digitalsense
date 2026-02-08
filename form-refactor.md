Here is the parsed content repackaged into a structured Markdown file, suitable for use as a technical specification document for developers or UI designers.

---

# Revised RFQ Form Specification

## 1. UI Wireframes & Layout

The following sections outline the visual structure and field hierarchy of the form.

### Section 1: Contact Information (Always Visible)

```text
┌─────────────────────────────────────────────────┐
│                                                 │
│  First Name * │
│  ┌───────────────────────────────────────────┐  │
│  │ John                                      │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  Last Name * │
│  ┌───────────────────────────────────────────┐  │
│  │ Doe                                       │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  Email Address * │
│  ┌───────────────────────────────────────────┐  │
│  │ john@company.com                          │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  Phone Number * │
│  ┌───────────────────────────────────────────┐  │
│  │ +260 97 XXX XXXX                          │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  Company/Organization                           │
│  ┌───────────────────────────────────────────┐  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
└─────────────────────────────────────────────────┘

```

### Section 2: Service Selection (Trigger)

_Note: This selection drives the conditional logic for Section 3._

```text
┌─────────────────────────────────────────────────┐
│                                                 │
│  Which service are you interested in? * │
│  (Radio button selection - single choice)       │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │                                         │    │
│  │  ⚡ Energy & Power Systems              │    │
│  │  Solar PV, battery storage, electrical  │    │
│  │                                         │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │                                         │    │
│  │  🔒 IT & Infrastructure                 │    │
│  │  Managed IT, cybersecurity, cloud       │    │
│  │                                         │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │                                         │    │
│  │  💻 Software Development                │    │
│  │  Web apps, e-commerce, custom software  │    │
│  │                                         │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
└─────────────────────────────────────────────────┘

```

### Section 3: Conditional Fields

_Only **one** of the following subsections appears based on the Service Selection._

#### 3A. Energy-Specific Fields

```text
┌─────────────────────────────────────────────────┐
│                                                 │
│  What type of system do you need? * │
│  [ Dropdown: Grid-Tied / Hybrid / Off-Grid /    │
│    Battery Only / Not Sure ]                    │
│                                                 │
│  Property Type * │
│  [ Dropdown: Residential / Commercial /         │
│    Industrial / Agricultural / Mixed ]          │
│                                                 │
│  Average Monthly Electricity Bill (USD)         │
│  [ Text Input ]                                 │
│                                                 │
│  Can you provide recent utility bills?          │
│  ☐ Yes, I can upload or email them              │
│                                                 │
│  Preferred Timeline * │
│  [ Dropdown: Urgent / 1-3 mo / 3-6 mo /         │
│    6-12 mo / 12+ mo ]                           │
│                                                 │
└─────────────────────────────────────────────────┘

```

#### 3B. IT-Specific Fields

```text
┌─────────────────────────────────────────────────┐
│                                                 │
│  Which IT services do you need? * │
│  (Multi-select Checkboxes)                      │
│  ☐ Managed IT Services                          │
│  ☐ Cybersecurity                                │
│  ☐ Cloud Infrastructure                         │
│  ☐ Network Management                           │
│  ☐ Backup & Disaster Recovery                   │
│  ☐ Server Infrastructure                        │
│  ☐ Other: [ Text Input ]                        │
│                                                 │
│  Number of Employees/Endpoints * │
│  [ Dropdown: 1-10 / 11-25 / 26-50 / 51-100 /    │
│    101-250 / 250+ ]                             │
│                                                 │
│  Current IT Setup * │
│  [ Dropdown: None / Basic / Established /       │
│    Advanced / Not Sure ]                        │
│                                                 │
│  Urgency Level * │
│  [ Dropdown: Critical / High / Medium / Low ]   │
│                                                 │
└─────────────────────────────────────────────────┘

```

#### 3C. Software Development-Specific Fields

```text
┌─────────────────────────────────────────────────┐
│                                                 │
│  What type of project do you need? * │
│  [ Dropdown: Web App / E-commerce / CMS /       │
│    Enterprise / Mobile App / Design / Other ]   │
│                                                 │
│  Starting Point * │
│  [ Dropdown: Scratch / Upgrade / Migration /    │
│    Integration ]                                │
│                                                 │
│  Key Features/Requirements                      │
│  (Multi-select Checkboxes)                      │
│  ☐ User authentication                          │
│  ☐ Payment processing                           │
│  ☐ API integrations                             │
│  ☐ CMS                                          │
│  ☐ Analytics                                    │
│  ☐ Mobile app                                   │
│  ☐ Multi-language                               │
│  ☐ Real-time features                           │
│  ☐ Other: [ Text Input ]                        │
│                                                 │
│  Project Timeline * │
│  [ Dropdown: Rush / Standard / Extended /       │
│    Large Scale / Flexible ]                     │
│                                                 │
└─────────────────────────────────────────────────┘

```

### Section 4: Project Details (Universal - Appears After Selection)

```text
┌─────────────────────────────────────────────────┐
│                                                 │
│  Project Description * │
│  [ Textarea - Min 50 chars ]                    │
│                                                 │
│  Budget Range (Optional)                        │
│  [ Dropdown: <$10k / $10k-25k / $25k-50k /      │
│    $50k-100k / $100k-250k / $250k+ / Guidance ] │
│                                                 │
│  How did you hear about us?                     │
│  [ Dropdown: Search / Referral / Social /       │
│    Event / Existing Client / Other ]            │
│                                                 │
│  Supporting Documents (Optional)                │
│  [ File Upload Area ]                           │
│  📎 Drag files here or click to browse          │
│     Accepted: PDF, JPG, PNG, DOC, XLS           │
│     Max: 10MB per file, up to 5 files           │
│                                                 │
└─────────────────────────────────────────────────┘

```

### Section 5: Submission

```text
┌─────────────────────────────────────────────────┐
│                                                 │
│  [ BUTTON: Request Detailed Quote → ]           │
│  (Full-width, prominent green, 56px height)     │
│                                                 │
│  We'll respond within 48 business hours with    │
│  a detailed quote and next steps.               │
│                                                 │
│  By submitting, you agree to our privacy policy │
│                                                 │
└─────────────────────────────────────────────────┘

```

---

## 2. Supporting Copy (Sidebar/Left Column)

**Header:** Request a Quote
**Subtext:** Get a detailed, transparent proposal with technical specifications, clear pricing, and realistic timelines.

**Value Props (Your Quote Includes):**

- **Technical Specifications:** Complete system design with equipment specs, performance metrics, and compliance standards.
- **Transparent Pricing:** Line-item breakdown showing exactly what you're paying for. No hidden costs.
- **Implementation Timeline:** Realistic project schedule from assessment through deployment.
- **ROI Analysis:** Financial projections with documented assumptions (Energy projects).

**Process:**

1. Submit request (5 mins)
2. Technical review
3. Site assessment (if needed)
4. Detailed proposal (within 48 hrs)
5. Consultation call

**Contact Support:**

- WhatsApp Chat
- Email: info@digitalsense.co.zm
- Hours: Mon-Fri, 8:00 AM - 5:00 PM CAT

---

## 3. Functional Logic & Behavior

### Progressive Disclosure Strategy

1. **Step 1:** Contact Info (Always visible to capture lead).
2. **Step 2:** Service Selection (Always visible).
3. **Step 3:** Service-Specific Questions (Revealed based on Step 2).
4. **Step 4:** Universal Project Details (Revealed after Step 2).
5. **Step 5:** Submit (Revealed after Step 4).

### Animation Specifications

- **Reveal:** Height 0 → auto, Opacity 0 → 1. Duration: 300ms. Easing: `ease-out`.
- **Hide:** Reverse of reveal. Duration: 200ms. Easing: `ease-in`.
- **Scroll:** Smooth scroll to newly revealed fields (Offset -100px for sticky headers).

### Validation Rules

| Field                  | Requirement                                         | Triggers            |
| ---------------------- | --------------------------------------------------- | ------------------- |
| **Universal (Top)**    | Name, Email, Phone                                  | On Blur / Submit    |
| **Service Select**     | Mandatory                                           | On Submit           |
| **Energy**             | System Type, Property Type, Timeline                | On Submit           |
| **IT**                 | Services (min 1), Emp Count, Current Setup, Urgency | On Submit           |
| **Software**           | Project Type, Start Point, Timeline                 | On Submit           |
| **Universal (Bottom)** | Description (Min 50 chars)                          | Live Count / Submit |
| **Files**              | Max 10MB, Specific formats                          | On Upload           |

### Edge Case Handling

1. **User switches service mid-form:**

- _Action:_ Clear service-specific fields silently. Keep contact info and universal fields.

2. **User submits without selection:**

- _Action:_ Scroll to service cards, highlight red, show error message.

3. **Partially filled form:**

- _Action:_ Browser prompt "You have unsaved changes" if user attempts to leave.

---

## 4. Technical Implementation

### Logic (Pseudo-code)

```javascript
// On service selection change
function handleServiceChange(selectedService) {
  // 1. Hide all service-specific sections
  hideElement("#energy-fields");
  hideElement("#it-fields");
  hideElement("#software-fields");

  // 2. Show selected service fields with animation
  if (selectedService === "energy") {
    showElement("#energy-fields");
  } else if (selectedService === "it") {
    showElement("#it-fields");
  } else if (selectedService === "software") {
    showElement("#software-fields");
  }

  // 3. Always show universal fields after service selection
  showElement("#universal-fields");
  showElement("#submit-section");

  // 4. Smooth scroll to newly revealed content
  scrollToElement("#" + selectedService + "-fields", {
    offset: -100, // Account for sticky header
    behavior: "smooth",
  });
}
```

### Accessibility (A11y)

- **ARIA Regions:** Use `role="region"` and `aria-hidden` for conditional sections.
- **Announcements:** Screen readers should announce "Energy & Power Systems selected. Additional fields now available."
- **Focus Management:** Move focus to the first new field after selection.
- **Keyboard Nav:** Ensure logical tab order; hidden fields must be unreachable via Tab.

### Mobile Responsiveness (< 768px)

- Service cards stack vertically (full width).
- Contact fields stack vertically.
- Sticky submit button at bottom of viewport.
- Touch-friendly dropdowns (use native select).
- File upload triggers camera option.
