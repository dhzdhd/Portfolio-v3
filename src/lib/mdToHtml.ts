import { unified } from "unified"
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype'
import rehypeStringify from "rehype-stringify";

export const mdToHtml = async (content: string) => {
    return await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(content)
}