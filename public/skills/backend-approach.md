---
name: backend-approach
description: Apply first-principles reasoning to backend changes, integration choices, background processing, and deployment handoff.
---

# Backend approach

Understand the requirement and constraints first. Choose the simplest solution that meets them, and explain its behavior, failure cases, and operational setup.

Apply this guidance to the project's actual architecture. It does not require a browser client, database, queue, AI integration, or particular hosting provider. Use the relevant checks rather than adding infrastructure to satisfy the document.

## Understand before implementing

Inspect the existing workflow and code. Separate what already works from intended behavior and configuration still needed. Explain substantial changes with a concrete before-and-after example, including what affected users or operators must do. Start with plain language, then give technical detail when useful.

## Check feasibility and justify tools

Confirm runtime limits, provider capabilities, permissions, data volume, and persistence requirements. Compare existing capabilities with additional services against those needs. Do not introduce infrastructure or dependencies merely because they are common. Explain the requirement that justifies adding them and the cost of operating them. Challenge suggestions that add complexity without a demonstrated benefit.

## Trace the full lifecycle

Follow an operation from input through validation, authorization, persistence, external calls, and observable results, wherever those stages apply. Keep business rules consistent across all entry points. For integrations that use delegated access, identify which account grants access, what permissions apply, how tokens expire, and how access is revoked. Prefer supported automatic setup over asking ordinary users to manage developer credentials.

## Design for interruption and recovery

Check what happens when a client disconnects, a process restarts, a network call fails, an operation repeats, or a write only partially completes. If background jobs are involved, explain where they are stored, what executes them, what triggers retries, and whether processing depends on user activity. Use transactions, persistence, retry limits, duplicate prevention, and cleanup where the workflow requires them. Describe the actual execution model and guarantees rather than implying capabilities it does not provide.

## Verify and hand off

Give a small end-to-end test with an expected result. Investigate underlying errors instead of guessing from generic failure messages. State any required migration, environment configuration, provider setup, deployment, or scheduler, with the next action and its purpose. Separate verified behavior from untested behavior and external prerequisites. Document material limits without repeating the same explanation across files.

## Keep documentation current

Read relevant existing requirements and architecture documentation before changing documented behavior. Update the affected sections when an authorized change alters business rules, permissions, data models, integrations, or operational setup. Distinguish intended requirements from current implementation and known gaps; do not rewrite requirements merely to match a bug or unfinished feature. Use the project's existing document names, such as REQUIREMENTS.md and ARCHITECTURE.md, rather than creating redundant copies. Update skill instructions only when the working principles change, not after every feature.
