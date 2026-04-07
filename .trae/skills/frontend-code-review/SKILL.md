---
name: "frontend-code-review"
description: "Performs comprehensive frontend code review covering business logic, code quality, and performance. Invoke when user asks for code review, wants to review frontend changes, or before merging frontend PRs."
---

# Frontend Code Review

A comprehensive frontend code review skill that evaluates code across multiple dimensions to ensure high-quality, maintainable, and performant frontend implementations.

## Review Dimensions

This skill evaluates frontend code across three key dimensions:

### 1. Business Logic Review

Focus areas:
- **Data Flow**: Verify data fetching, state management, and prop drilling patterns
- **Business Rules**: Ensure business logic is correctly implemented and separated from UI
- **Edge Cases**: Identify missing boundary conditions and error handling
- **Accessibility**: Check keyboard navigation, ARIA labels, screen reader support
- **Responsiveness**: Validate mobile-first approach and breakpoints

### 2. Code Quality Review

Focus areas:
- **React/Vue Best Practices**: Proper hook usage, component composition, separation of concerns
- **TypeScript**: Strong typing, interface definitions, avoid `any` types
- **Code Organization**: Module structure, barrel exports, circular dependencies
- **State Management**: Appropriate state solutions, avoid over-engineering
- **Error Boundaries**: Proper error handling and recovery mechanisms

### 3. Performance Review

Focus areas:
- **Bundle Size**: Monitor dependency additions, tree-shaking effectiveness
- **Rendering Performance**: Memoization, lazy loading, virtual scrolling for lists
- **Network Efficiency**: Request deduplication, caching strategies, payload size
- **Core Web Vitals**: LCP, FID, CLS optimization opportunities

## Review Process

When conducting a review:

1. **Understand Context**: Read the PR description and linked issues
2. **Scan Holistically**: Get an overview of changed files and their relationships
3. **Deep Dive**: Examine critical paths, shared utilities, and state management
4. **Test**: Run the application to verify behavior when possible
5. **Document**: Provide specific, actionable feedback with code examples

## Feedback Principles

- Be constructive and specific; avoid vague criticism
- Distinguish between critical issues, suggestions, and nitpicks
- Provide code examples when suggesting changes
- Acknowledge good practices and innovative solutions
- Consider the PR's scope and don't block on minor issues

## Invocation

Invoke this skill when:
- User asks to "review code" or "review my changes"
- User wants feedback on frontend implementation
- User asks "what do you think of this code?"
- Before merging significant frontend changes
- User requests a thorough analysis of a component or feature
