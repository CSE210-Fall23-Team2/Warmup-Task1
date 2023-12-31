'use strict';
export const test_html = `<body>
<div class="parent">
    <h1>Using epub-type</h1>
    <p>There once was a <span epub-type="stretchsummary" id="t-girl-toggle">girl</span><span id="t-girl-detail" epub-type="stretchdetail"> Her name was <span epub-type="stretchsummary">Nancy</span><span epub-type="stretchdetail">That was my mother's name.</span> Some stuff at the end</span></p>
    <p>Most scientists accept <a href="#global-warming-details" epub-type="stretchsummary" id="t-warm-toggle">global warming</a>.</p>
    <aside id="global-warming-details" epub-type="stretchdetail">
        <p>More details on global warming. <a epub-type="stretchsummary" href="#evenmore">More supporting evidence</a></p>
        <ol id="evenmore" epub-type="stretchdetail">
            <li>Greater degrees of CO<sub>2</sub></li>
            <li>Evidence of warming <span epub-type="stretchsummary">trend</span><span epub-type="stretchdetail"> It's the truth -- accept it!</span>.</li>
        </ol>
    </aside>
    <p>This is material at the bottom of the page that will get stretched down.</p>
</div>
<div class="child"></div>
</body>`;
