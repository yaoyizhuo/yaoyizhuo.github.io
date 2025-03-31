document.addEventListener('DOMContentLoaded', function() {
    const isPostPage = document.querySelector('.post-content');
    if (!isPostPage) return;

    const timeElements = document.querySelectorAll('time[datetime]');
    if (timeElements.length === 0) return;

    const pubTime = new Date(timeElements[0].getAttribute('datetime'));
    const threshold = 30 * 24 * 60 * 60 * 1000; // 30天

    if ((Date.now() - pubTime) > threshold) {
        const days = Math.floor((Date.now() - pubTime) / (1000 * 60 * 60 * 24));
        const warningHTML = `
            <div class="note note-warning" style="font-size:0.9rem">
                <h6 class="warning-title">文章时效性提示</h6>
                <p class="warning-content">
                    这是一篇发布于 ${days} 天前的文章，部分内容可能已过时。
                </p>
            </div>
        `;

        // 使用更安全的插入方式
        document.querySelector('.post-content').insertAdjacentHTML('afterbegin', warningHTML);
    }
});