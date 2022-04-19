import { createRouter, defineEventHandler, useBase } from 'h3';

const router = createRouter();
router.get('/', defineEventHandler(event => 'Test'));
router.get('/hello', defineEventHandler(event => 'Hello'));
router.get('/hello/world', defineEventHandler(event => 'Hello World'));

export default useBase('/api', router.handler);
