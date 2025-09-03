**Playwright MCP Server with AI: Build, Refactor & Fix End-to-End Tests Using GitHub Copilot + AI Agents**

**Step by Step Approach 1:**
Step1: Let’s install Playwright MCP Server in VS Code using Terminal/Command Line:
code --add-mcp '{"name":"playwright","command":"npx","args":["@playwright/mcp@latest"]}'
Step2: Go to VS code, Press Ctrl+Shift+P(WINDOWS)
You will see a screen Select “MCP: List Servers” option
Next, select “playwright”
Next, select “Show Configuration”
Then, “setting.json” file will open.
Next, Click on “Start” in the settings json file.
Finally, At the end make sure that Playwright MCP Server is running.


**Step by Step Approach 2:**
Step1: Create a “.vscode” folder if it is not there in the project
Next, create “mcp.json” file under .vscode folder.
Then, Click on “Add Server” button
Step2: Select NPM package
Step3: Enter “@playwright/mcp” command, Next select “allow”
Step4: Automatically Playwright MCP Server configurations will be generated.
Step5: Click on “Start” from Playwright MCP Server configuration.
Finally make sure that Playwright MCP Server is Running.


