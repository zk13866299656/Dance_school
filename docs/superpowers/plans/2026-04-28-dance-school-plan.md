# 明心慧志舞蹈学校 宣传网站 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一个纯静态的新中式水墨留白风格舞蹈学校宣传网站

**Architecture:** 单页面滚动式，HTML 语义结构 + CSS 变量驱动样式 + JS Intersection Observer 驱动滚动动画。三文件结构：index.html / css/style.css / js/main.js

**Tech Stack:** 纯 HTML/CSS/JS，Google Fonts (Noto Serif SC + Noto Sans SC)，Intersection Observer API，CSS 变量，CSS Grid + Flexbox

---

### Task 1: 项目骨架搭建

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `js/main.js`

- [ ] **Step 1: 创建 index.html 基础结构**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>明心慧志舞蹈学校</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 创建 css/style.css 基础**

```css
/* === CSS Variables === */
:root {
  --bg-main: #FAF8F5;
  --bg-alt: #F0EDE8;
  --text-primary: #2C2416;
  --text-secondary: #6B6570;
  --accent: #C43A31;
  --accent-blue: #3B5998;
  --font-serif: 'Noto Serif SC', STSong, Songti SC, serif;
  --font-sans: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

/* === Reset === */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  color: var(--text-primary);
  background: var(--bg-main);
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}
```

- [ ] **Step 3: 创建 js/main.js 基础**

```js
document.addEventListener('DOMContentLoaded', () => {
  // Scroll animations initialized here
});
```

- [ ] **Step 4: 在浏览器中打开 index.html，确认无报错，字体加载正常**

run `start index.html` or open manually

- [ ] **Step 5: 初始化 git 并提交**

```bash
cd "C:/Users/Administrator/Desktop/dance" && git init && git add -A && git commit -m "feat: project scaffold with base HTML/CSS/JS"
```

---

### Task 2: 导航栏

**Files:**
- Modify: `index.html` (add nav)
- Modify: `css/style.css` (add nav styles)

- [ ] **Step 1: 在 index.html 的 body 顶部加入导航 HTML**

```html
<header class="nav">
  <div class="nav-inner">
    <a href="#hero" class="nav-logo">明心慧志</a>
    <nav class="nav-links">
      <a href="#about">关于</a>
      <a href="#courses">课程</a>
      <a href="#teachers">师资</a>
      <a href="#gallery">风采</a>
      <a href="#contact">联系</a>
    </nav>
  </div>
</header>
```

- [ ] **Step 2: 在 style.css 中加入导航样式**

```css
/* === Navigation === */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(250, 248, 245, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  padding: 0 2rem;
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.nav-logo {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 0.1em;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text-secondary);
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 1.5px;
  background: var(--accent);
  transition: width 0.3s ease-out;
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-links a:hover::after {
  width: 100%;
}
```

- [ ] **Step 3: 浏览器刷新确认导航栏固定顶部、悬停有朱砂红下划线**

- [ ] **Step 4: 提交**

```bash
git add -A && git commit -m "feat: add navigation bar with hover underline effect"
```

---

### Task 3: Hero 首屏

**Files:**
- Modify: `index.html` (add hero section)
- Modify: `css/style.css` (add hero styles)

- [ ] **Step 1: 在 index.html 中加入 Hero HTML**

```html
<section class="hero" id="hero">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="hero-char">明</span>
      <span class="hero-char">心</span>
      <span class="hero-char">慧</span>
      <span class="hero-char">志</span>
    </h1>
    <p class="hero-subtitle">以舞明心，以艺慧志</p>
    <p class="hero-desc">专注中国舞教育，传承东方之美</p>
    <a href="#contact" class="btn-primary hero-cta">预约试课</a>
  </div>
  <div class="scroll-hint">
    <span class="scroll-line"></span>
  </div>
</section>
```

- [ ] **Step 2: 在 style.css 中加入 Hero 样式**

```css
/* === Hero === */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 40%, rgba(196,58,49,0.04) 0%, transparent 60%),
    radial-gradient(circle 40% at 20% 80%, rgba(59,89,152,0.03) 0%, transparent 50%),
    radial-gradient(circle 15% at 80% 20%, rgba(44,36,22,0.03) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  letter-spacing: 0.25em;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.hero-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: charIn 0.6s ease-out forwards;
}

.hero-char:nth-child(1) { animation-delay: 0.2s; }
.hero-char:nth-child(2) { animation-delay: 0.4s; }
.hero-char:nth-child(3) { animation-delay: 0.6s; }
.hero-char:nth-child(4) { animation-delay: 0.8s; }

@keyframes charIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  font-family: var(--font-serif);
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: var(--text-primary);
  opacity: 0;
  animation: fadeUp 0.6s ease-out 1.2s forwards;
  margin-bottom: 0.5rem;
}

.hero-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  opacity: 0;
  animation: fadeUp 0.6s ease-out 1.5s forwards;
  margin-bottom: 2.5rem;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Primary Button */
.btn-primary {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  padding: 0.85rem 2.8rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  transition: background 0.3s, transform 0.3s;
  opacity: 0;
  animation: fadeUp 0.6s ease-out 1.8s forwards;
}

.btn-primary:hover {
  background: #a8322a;
  transform: scale(1.03);
}

/* Scroll Hint */
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-line {
  display: block;
  width: 1px;
  height: 40px;
  background: var(--text-secondary);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.6); }
}
```

- [ ] **Step 3: 浏览器刷新确认 Hero 逐字动画、按钮引导**

- [ ] **Step 4: 提交**

```bash
git add -A && git commit -m "feat: add hero section with character-by-character animation"
```

---

### Task 4: 关于·明心慧志 板块

**Files:**
- Modify: `index.html` (add about section)
- Modify: `css/style.css` (add about styles)

- [ ] **Step 1: 在 Hero 下方加入 About HTML**

```html
<section class="section" id="about">
  <div class="container about-grid">
    <div class="about-text">
      <h2 class="section-title">关于 · 明心慧志</h2>
      <p class="about-body">明心慧志舞蹈学校，以中国舞为根，以美育为本。我们相信舞蹈不仅是肢体的训练，更是心灵的涵养。从少儿启蒙到艺考辅导，从成人兴趣到师资培养，我们以严谨的教学体系和深厚的文化底蕴，陪伴每一位学员在舞蹈中找到自信与优雅。</p>
      <p class="about-body">"明心"以观照内心，"慧志"以启迪志向——这是我们命名之初的信念，也是每一天课堂上的实践。</p>
    </div>
    <div class="about-visual">
      <div class="ink-ornament"></div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 在 style.css 中加入 About 样式**

```css
/* === Section Common === */
.section {
  padding: 6rem 2rem;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.12em;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 2.5rem;
  height: 2px;
  background: var(--accent);
}

/* === About === */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-body {
  font-size: 1.05rem;
  color: var(--text-primary);
  margin-bottom: 1.2rem;
  line-height: 2;
}

.about-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ink-ornament {
  width: 260px;
  height: 320px;
  background:
    radial-gradient(ellipse 70% 50% at 30% 40%, rgba(196,58,49,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 60% 60%, rgba(59,89,152,0.04) 0%, transparent 60%),
    radial-gradient(circle 30% at 50% 50%, rgba(44,36,22,0.03) 0%, transparent 60%);
  position: relative;
}

.ink-ornament::before {
  content: '';
  position: absolute;
  inset: 20px;
  border: 1px solid rgba(44,36,22,0.08);
}
```

- [ ] **Step 3: 浏览器确认双栏布局、水墨装饰块**

- [ ] **Step 4: 提交**

```bash
git add -A && git commit -m "feat: add about section with two-column layout and ink ornament"
```

---

### Task 5: 课程体系 板块

**Files:**
- Modify: `index.html` (add courses section)
- Modify: `css/style.css` (add courses styles)

- [ ] **Step 1: 在 About 下方加入 Courses HTML**

```html
<section class="section section-alt" id="courses">
  <div class="container">
    <h2 class="section-title">课程体系</h2>
    <div class="courses-grid">
      <div class="course-card">
        <div class="course-icon">🌸</div>
        <h3 class="course-name">少儿启蒙班</h3>
        <p class="course-age">4–6 岁</p>
        <p class="course-desc">以趣味引导为主，培养乐感与肢体协调，在游戏中种下舞蹈的种子。</p>
      </div>
      <div class="course-card">
        <div class="course-icon">🪷</div>
        <h3 class="course-name">少儿进阶班</h3>
        <p class="course-age">7–12 岁</p>
        <p class="course-desc">系统学习中国舞基本功与身韵组合，逐步建立规范的动作体系。</p>
      </div>
      <div class="course-card">
        <div class="course-icon">🎋</div>
        <h3 class="course-name">艺考辅导班</h3>
        <p class="course-age">12–18 岁</p>
        <p class="course-desc">针对舞蹈专业艺考方向，定制化训练计划，助力升学之路。</p>
      </div>
      <div class="course-card">
        <div class="course-icon">🏮</div>
        <h3 class="course-name">成人兴趣班</h3>
        <p class="course-age">18 岁以上</p>
        <p class="course-desc">零基础友好，在古典舞韵中修身养性，让忙碌的生活有诗意的停顿。</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 在 style.css 中加入课程样式**

```css
/* === Section Alt Background === */
.section-alt {
  background: var(--bg-alt);
}

/* === Courses Grid === */
.courses-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}

.course-card {
  background: #fff;
  padding: 2.5rem 1.5rem;
  text-align: center;
  transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}

.course-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}

.course-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.course-name {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.course-age {
  font-size: 0.85rem;
  color: var(--accent);
  margin-bottom: 1rem;
  font-weight: 500;
}

.course-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.8;
}
```

- [ ] **Step 3: 浏览器确认四列卡片、悬停浮起效果**

- [ ] **Step 4: 提交**

```bash
git add -A && git commit -m "feat: add courses section with 4-column card grid and hover effects"
```

---

### Task 6: 师资风采 板块

**Files:**
- Modify: `index.html` (add teachers section)
- Modify: `css/style.css` (add teachers styles)

- [ ] **Step 1: 在 Courses 下方加入 Teachers HTML**

```html
<section class="section" id="teachers">
  <div class="container">
    <h2 class="section-title">师资风采</h2>
    <div class="teachers-grid">
      <div class="teacher-card">
        <div class="teacher-avatar" style="background: linear-gradient(135deg, #e8e0d8, #d5cdc2);">
          <span class="teacher-placeholder">师</span>
        </div>
        <h3 class="teacher-name">林老师</h3>
        <p class="teacher-title">艺术总监</p>
        <p class="teacher-bio">北京舞蹈学院硕士，中国舞考级高级考官，二十年教学经验。</p>
      </div>
      <div class="teacher-card">
        <div class="teacher-avatar" style="background: linear-gradient(135deg, #d8e0e8, #c2cdd5);">
          <span class="teacher-placeholder">师</span>
        </div>
        <h3 class="teacher-name">陈老师</h3>
        <p class="teacher-title">高级教师</p>
        <p class="teacher-bio">上海戏剧学院舞蹈系毕业，专攻中国古典舞与民族民间舞教学。</p>
      </div>
      <div class="teacher-card">
        <div class="teacher-avatar" style="background: linear-gradient(135deg, #e8d8e2, #d5c2cd);">
          <span class="teacher-placeholder">师</span>
        </div>
        <h3 class="teacher-name">王老师</h3>
        <p class="teacher-title">少儿部主管</p>
        <p class="teacher-bio">十年少儿舞蹈教学经验，擅长以游戏化教学激发孩子兴趣。</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 在 style.css 中加入师资样式**

```css
/* === Teachers Grid === */
.teachers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1rem;
}

.teacher-card {
  text-align: center;
}

.teacher-avatar {
  width: 160px;
  height: 160px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.teacher-placeholder {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: rgba(255,255,255,0.6);
}

.teacher-name {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.teacher-title {
  font-size: 0.85rem;
  color: var(--accent);
  margin-bottom: 0.8rem;
}

.teacher-bio {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 260px;
  margin: 0 auto;
}
```

- [ ] **Step 3: 浏览器确认三列教师卡片**

- [ ] **Step 4: 提交**

```bash
git add -A && git commit -m "feat: add teachers section with 3-column grid and avatar placeholders"
```

---

### Task 7: 学员风采 + 家长心声 板块

**Files:**
- Modify: `index.html` (add gallery + testimonials)
- Modify: `css/style.css` (add styles)

- [ ] **Step 1: 在 Teachers 下方加入 Gallery + Testimonials HTML**

```html
<section class="section section-alt" id="gallery">
  <div class="container">
    <h2 class="section-title">学员风采</h2>
    <div class="gallery-grid">
      <div class="gallery-item" style="background: linear-gradient(135deg, #eceae5, #ddd9cf); aspect-ratio: 4/3;"></div>
      <div class="gallery-item tall" style="background: linear-gradient(135deg, #e5e7ec, #cfd3dd); aspect-ratio: 3/4;"></div>
      <div class="gallery-item" style="background: linear-gradient(135deg, #ede5e9, #ddcfd9); aspect-ratio: 4/3;"></div>
      <div class="gallery-item" style="background: linear-gradient(135deg, #e5ece8, #cfddd5); aspect-ratio: 4/3;"></div>
      <div class="gallery-item wide" style="background: linear-gradient(135deg, #eceae5, #ddd9cf); aspect-ratio: 16/9;"></div>
      <div class="gallery-item" style="background: linear-gradient(135deg, #e5e9ec, #cfd5dd); aspect-ratio: 4/3;"></div>
    </div>
  </div>
</section>

<section class="section" id="testimonials">
  <div class="container">
    <h2 class="section-title">家长心声</h2>
    <div class="testimonials-row">
      <div class="testimonial-card">
        <p class="testimonial-text">"女儿在这里学了三年，从害羞的小姑娘变成了舞台上自信满满的小舞者。谢谢老师们的用心。"</p>
        <p class="testimonial-author">— 小雅妈妈</p>
      </div>
      <div class="testimonial-card">
        <p class="testimonial-text">"作为成人零基础学员，没想到半年就能登台。明心慧志让我找到了工作之外的另一种表达。"</p>
        <p class="testimonial-author">— 李女士</p>
      </div>
      <div class="testimonial-card">
        <p class="testimonial-text">"艺考那年最庆幸的就是选了这里。老师比我们还上心，最后孩子考上了理想的学校。"</p>
        <p class="testimonial-author">— 张爸爸</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 在 style.css 中加入样式**

```css
/* === Gallery Grid === */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.gallery-item {
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease-out;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-item.tall {
  grid-row: span 2;
}

.gallery-item.wide {
  grid-column: span 2;
}

/* === Testimonials === */
.testimonials-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1rem;
}

.testimonial-card {
  background: #fff;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}

.testimonial-text {
  font-size: 0.95rem;
  line-height: 1.9;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-style: italic;
}

.testimonial-author {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 500;
}
```

- [ ] **Step 3: 浏览器确认画廊网格和家长心声卡片**

- [ ] **Step 4: 提交**

```bash
git add -A && git commit -m "feat: add gallery and testimonials sections"
```

---

### Task 8: 联系我们 + 页脚

**Files:**
- Modify: `index.html` (add contact + footer)
- Modify: `css/style.css` (add styles)

- [ ] **Step 1: 在 Testimonials 下方加入 Contact + Footer HTML**

```html
<section class="section section-alt" id="contact">
  <div class="container">
    <h2 class="section-title">联系我们</h2>
    <div class="contact-grid">
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-label">地址</span>
          <span class="contact-value">上海市某某区某某路 123 号</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">电话</span>
          <span class="contact-value">021-XXXX-XXXX</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">微信</span>
          <span class="contact-value">mingxinhuizhi_wx</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">营业时间</span>
          <span class="contact-value">周二至周日 9:00–20:00</span>
        </div>
      </div>
      <div class="contact-cta-box">
        <p class="cta-text">预约免费试课</p>
        <p class="cta-sub">来体验一节中国舞课程，感受舞蹈之美</p>
        <a href="#" class="btn-primary">立即预约</a>
      </div>
    </div>
  </div>
</section>

<footer class="footer">
  <p class="footer-text">明心慧志舞蹈学校 &copy; 2026</p>
  <p class="footer-sub">以舞明心，以艺慧志</p>
</footer>
```

- [ ] **Step 2: 在 style.css 中加入样式**

```css
/* === Contact === */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 1rem;
}

.contact-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.2rem 0;
  border-bottom: 1px solid rgba(44,36,22,0.06);
}

.contact-label {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent);
  min-width: 70px;
}

.contact-value {
  font-size: 0.95rem;
  color: var(--text-primary);
}

.contact-cta-box {
  background: #fff;
  padding: 3rem 2.5rem;
  text-align: center;
  box-shadow: 0 2px 20px rgba(0,0,0,0.05);
}

.cta-text {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.cta-sub {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

/* === Footer === */
.footer {
  background: var(--text-primary);
  color: rgba(255,255,255,0.7);
  text-align: center;
  padding: 3rem 2rem;
}

.footer-text {
  font-family: var(--font-serif);
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: rgba(255,255,255,0.9);
}

.footer-sub {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
}
```

- [ ] **Step 3: 浏览器确认联系板块和页脚**

- [ ] **Step 4: 提交**

```bash
git add -A && git commit -m "feat: add contact section and footer"
```

---

### Task 9: 滚动动画 (Intersection Observer)

**Files:**
- Modify: `js/main.js` (add scroll reveal)
- Modify: `css/style.css` (add reveal classes)

- [ ] **Step 1: 在 style.css 末尾加入 reveal 动画样式**

```css
/* === Scroll Reveal === */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* staggered children delay */
.reveal-stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal-stagger.visible > *:nth-child(1) { transition-delay: 0s; opacity: 1; transform: translateY(0); }
.reveal-stagger.visible > *:nth-child(2) { transition-delay: 0.1s; opacity: 1; transform: translateY(0); }
.reveal-stagger.visible > *:nth-child(3) { transition-delay: 0.2s; opacity: 1; transform: translateY(0); }
.reveal-stagger.visible > *:nth-child(4) { transition-delay: 0.3s; opacity: 1; transform: translateY(0); }
.reveal-stagger.visible > *:nth-child(5) { transition-delay: 0.4s; opacity: 1; transform: translateY(0); }
.reveal-stagger.visible > *:nth-child(6) { transition-delay: 0.5s; opacity: 1; transform: translateY(0); }
```

- [ ] **Step 2: 替换 js/main.js 完整实现**

```js
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    observer.observe(el);
  });

  // Nav background change on scroll
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(250, 248, 245, 0.95)';
      nav.style.boxShadow = '0 1px 20px rgba(0,0,0,0.06)';
    } else {
      nav.style.background = 'rgba(250, 248, 245, 0.85)';
      nav.style.boxShadow = 'none';
    }
  });
});
```

- [ ] **Step 3: 在 index.html 中给各板块加上 reveal 类**

在 `<section class="section section-alt" id="courses">` 上加 `reveal`
在 `<section class="section" id="teachers">` 上加 `reveal`
在 `<section class="section section-alt" id="gallery">` 上加 `reveal`
在 `<section class="section" id="testimonials">` 上加 `reveal`
在 `<section class="section section-alt" id="contact">` 上加 `reveal`

- [ ] **Step 4: 浏览器滚动验证动画触发**

- [ ] **Step 5: 提交**

```bash
git add -A && git commit -m "feat: add scroll reveal animations with Intersection Observer"
```

---

### Task 10: 响应式适配

**Files:**
- Modify: `css/style.css` (add media queries)

- [ ] **Step 1: 在 style.css 末尾加入响应式断点**

```css
/* === Responsive === */
@media (max-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-links {
    gap: 1.2rem;
  }
  .nav-links a {
    font-size: 0.8rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .about-visual {
    order: -1;
  }
  .ink-ornament {
    width: 180px;
    height: 220px;
  }

  .courses-grid {
    grid-template-columns: 1fr 1fr;
  }

  .teachers-grid {
    grid-template-columns: 1fr 1fr;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonials-row {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section {
    padding: 4rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    letter-spacing: 0.15em;
  }

  .courses-grid,
  .teachers-grid,
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item.wide {
    grid-column: span 1;
  }

  .gallery-item.tall {
    grid-row: span 1;
  }
}
```

- [ ] **Step 2: 浏览器调整窗口宽度验证各断点表现**

- [ ] **Step 3: 提交**

```bash
git add -A && git commit -m "feat: add responsive breakpoints for tablet and mobile"
```

---

### Task 11: 最终打磨

**Files:**
- Modify: `index.html` (fine-tune content, add smooth scroll padding)
- Modify: `css/style.css` (polish details)

- [ ] **Step 1: 在 style.css 中加入全局微调**

```css
/* === Scroll offset for fixed nav === */
section[id] {
  scroll-margin-top: 80px;
}

/* === Selection color === */
::selection {
  background: rgba(196,58,49,0.15);
  color: var(--text-primary);
}

/* === Focus outline === */
a:focus-visible,
.btn-primary:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

/* === Subtle page load === */
body {
  animation: bodyIn 0.6s ease-out;
}

@keyframes bodyIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

- [ ] **Step 2: 逐屏滚动审查每个板块的视觉一致性**

- [ ] **Step 3: 提交**

```bash
git add -A && git commit -m "polish: scroll offset, selection color, focus states, page load fade"
```

---

### Task 12: 初始化 git 并最终提交

- [ ] **Step 1: 确认所有文件已添加**

```bash
git status
```

- [ ] **Step 2: 如有未跟踪文件，添加并提交**

```bash
git add -A && git commit -m "chore: finalize dance school website v1"
```
