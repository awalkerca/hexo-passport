var cheerio = require('cheerio');

var defaultTotal = 195;

hexo.extend.tag.register('passport', function(args, content){

    var doc = cheerio.load(content);

    var stamps = doc('.rubber-stamp').length;
    var total = args[0] || defaultTotal;
    var percentage = (stamps / total * 100).toFixed(0);

    var completionRender = `<p class='passport-completion'>
                Completed: ${doneCount} of ${allCount}
                <span class="percentage">${percentage}</span>
            </p>`;

    return `${completionRender}<div class='passport-stamps'>${content}</div>`;

}, {ends: true});
