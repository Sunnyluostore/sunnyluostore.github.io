// 分类展开/收起
function toggleSubcategory(element) {
  const nextEl = element.nextElementSibling;
  if (nextEl) {
    nextEl.classList.toggle('active');
  }
}

// 面包屑生成（产品页/分类页自动生成）
document.addEventListener('DOMContentLoaded', () => {
  const breadcrumbEl = document.getElementById('breadcrumb');
  if (breadcrumbEl) {
    const path = window.location.pathname;
    const parts = path.split('/').filter(part => part);
    let breadcrumbHTML = '<a href="/">Home</a>';
    parts.forEach((part, index) => {
      const isLast = index === parts.length - 1;
      const name = part.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      if (isLast) {
        breadcrumbHTML += ` > ${name}`;
      } else {
        breadcrumbHTML += ` > <a href="/${parts.slice(0, index+1).join('/')}">${name}</a>`;
      }
    });
    breadcrumbEl.innerHTML = breadcrumbHTML;
  }
});