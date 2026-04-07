# Code Quality Review

Assess code for maintainability, readability, and adherence to framework best practices.

## React/Vue Quality

- [ ] Components are single-responsibility and composable
- [ ] Hooks follow rules of hooks (no conditionals in loops)
- [ ] Custom hooks extract reusable logic properly
- [ ] Memoization used appropriately (useMemo, useCallback, memo)
- [ ] No unnecessary re-renders from object/array props
- [ ] Event handlers properly bound or use arrow functions
- [ ] Cleanup functions in useEffect for subscriptions/timers

## TypeScript Quality

- [ ] Strong types throughout; no `any` or `as` casting abuse
- [ ] Interfaces/types properly defined for props and state
- [ ] Generic types used for reusable utilities
- [ ] Union types for discrete values, interfaces for object shapes
- [ ] Enums or const objects for fixed sets of values
- [ ] Utility types (Partial, Pick, Omit) used appropriately

## Code Organization

- [ ] Logical folder structure by feature or domain
- [ ] Barrel exports (index.ts) for public APIs
- [ ] No circular dependencies between modules
- [ ] Constants co-located with their usage
- [ ] Types in separate files or in dedicated `types/` folder
- [ ] No commented-out dead code; use version control instead

## State Management

- [ ] State location appropriate (local vs. global)
- [ ] Derived state correctly computed (not stored)
- [ ] Mutations done immutably (spread, concat, map, filter)
- [ ] State updates batched where appropriate
- [ ] Complex state machines use proper patterns

## Error Handling

- [ ] Error boundaries catch and display errors gracefully
- [ ] API errors handled with user-friendly messages
- [ ] Try/catch for async operations
- [ ] Fallback UI for failed resource loads
- [ ] Errors logged for debugging (not console.error spam)
