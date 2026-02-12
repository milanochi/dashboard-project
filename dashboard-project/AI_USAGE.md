# AI Usage Documentation

## Tools Used
- **GitHub Copilot** - AI coding assistant integrated in VS Code

## Parts Where AI Was Used


### 1. Utility Functions
AI created formatters for:
- Date formatting
- Currency formatting
- Status color mapping


## What Was Changed or Rejected
- **No significant rejections** - The generated code was well-structured and followed the requirements
- **Minor adjustments**: Ensured proper accessibility attributes (aria-labels, roles)

## Points of Disagreement / Notes
- The code is intentionally straightforward to meet the "readability over cleverness" requirement
- I used simple State management `useState` hooks rather than more complex solutions (Context, Redux) suggested by Ai but i disagreed  - appropriate for this scope

## Extra Field Documentation
The **Budget** field was added as the extra required field:
- Type: `number | null`
- Displayed with USD currency formatting
- Shows "Not specified" when null
- Represents the project's allocated budget

This field was chosen because it's a practical addition for a project dashboard and demonstrates handling of optional numeric data.
