{panel:title=(i) *Test Environment*|bgColor=#eae6ff}
k8s cluster: *development*
*Browser:* G\! Chrome Version 86.0.4240.80 (Official Build) (x86_64)
*User:* [yourJiraUser|mailto:yourJiraUser@yourDomain.com]
*client:* QA
{panel}

{panel:title=(i) *Issue*|bgColor=#deebff}

The lazy brown fox was “_PAGE NOT FOUND”_ in the UI for *[feature x]*

_Expected:_ New investors that get created are able to drill down into and display information properly to UI
{panel}

{panel:title=(!) *Steps to replicate*|bgColor=#fffae6}

* step 1
* step 2.. select ...
* navigate to step 3..toFixed.
* step 4 lazy brown fox didn't jump
* (!) Hits a request error
{panel}

{panel:title=(x) *Request URL:* `https://your-request-env.wee.com/lazy/brown/fox`|bgColor=#ffebe6}

*Payload:* {{payloadfKey: valueExample}}

*Response:* 500
\{"timestamp":"2020-10-21T15:15:44.075+00:00","status":500,"error":"Internal Server Error","message":"","path":"/lazy/brown/fox/"}
{panel}