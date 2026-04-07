# Business Logic Review

Focus on verifying that the implementation correctly fulfills the intended purpose and handles all scenarios appropriately.

## Key Questions

1. **Purpose Verification**: Does the code do what it's supposed to do?
2. **Data Flow**: Is data correctly fetched, transformed, and displayed?
3. **Business Rules**: Are business constraints properly enforced?
4. **Error Handling**: Are edge cases and failure modes handled gracefully?

## Checklist

- [ ] User interactions trigger correct state changes
- [ ] API responses are correctly parsed and displayed
- [ ] Loading states provide clear feedback
- [ ] Error states guide user toward recovery
- [ ] Empty states communicate what to expect
- [ ] Forms validate input and submit correctly
- [ ] Authentication/authorization is properly enforced
- [ ] Session expiration and token refresh work correctly
- [ ] Data persists as expected (localStorage, cookies, server)
- [ ] Notifications/feedback inform user of action results

## Common Pitfalls

- **Prop Drilling**: Passing data through multiple component layers
- **Side Effects in Render**: Creating infinite loops or unexpected re-renders
- **Race Conditions**: Not handling concurrent or out-of-order requests
- **Stale Closures**: Using outdated state values in callbacks
- **Imperative to Declarative**: Overusing refs and direct DOM manipulation
