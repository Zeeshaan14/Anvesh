import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';

console.log(`📡 Fetching OpenAPI spec from: ${BACKEND_URL}/openapi.json`);
console.log('⚠️  Make sure your FastAPI backend is running!\n');

try {
  const openapi = createOpenAPI({
    input: [`${BACKEND_URL}/openapi.json`],
  });

  await generateFiles({
    input: openapi,
    output: './content/docs/api',
    groupBy: 'tag',
  });

  console.log('✅ API documentation generated successfully!');
  console.log('📁 Output: ./content/docs/api');
} catch (error) {
  console.error('❌ Failed to generate docs:', error.message);
  console.log('\n💡 Tip: Start your backend first:');
  console.log('   cd ../automation-server');
  console.log('   uv run uvicorn app.main:app --reload');
  process.exit(1);
}
