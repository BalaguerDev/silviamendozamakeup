import { marked } from 'marked';

export function convertMarkdownToHTML(content, limit = 200) {
    const plainContent = content ? content.trim() : "";
    const truncatedContent = plainContent.length > limit ? `${plainContent.slice(0, limit)}...` : plainContent;
    return marked(truncatedContent);
}