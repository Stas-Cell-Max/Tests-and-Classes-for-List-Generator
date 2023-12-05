const CLI = require('../lib/cli');
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('../lib/document');

// Mock inquirer to simulate user input
jest.mock('inquirer');

describe('CLI class', () => {
  test('run() generates correct HTML and writes to file', async () => {
    // Mock user input
    inquirer.prompt.mockResolvedValueOnce({ name: 'John' }).mockResolvedValueOnce({ text: 'Task 1', priority: false, confirmAddTask: false });

    const cli = new CLI();
    await cli.run();

    // Check if the HTML file is generated with the correct content
    const generatedHTMLPath = writeFile.mock.calls[0][0];
const generatedHTML = await fs.promises.readFile(generatedHTMLPath, 'utf-8');

    expect(generatedHTML).toBe(expectedHTML);

    // Check if the console.log message is displayed
    expect(console.log).toHaveBeenCalledWith('Created tasks.html');
  });

  // Add more tests as needed for different scenarios in your CLI application
});
