---
id: 458bdeff-8577-46e6-922e-96cc1dac496e
title: Serverless Advice
desc: Serverless advice and resource list for beginners
updated: 1611786872535
created: 1611777594679
url: serverless-advice
---

## Serverless Advice

I work for an AWS Advanced Partner. All of my work is inside AWS and most of the code and services we build and use are serverless.

My experience with serverless is a lengthy one, with the first time dipping my toe in the ecosystem in 2017 just as I graduated from a coding bootcamp.

Since then serverless has matured a lot, but I still see and hear of developers and businesses who haven't tried it yet or don't see the point.

With this post I'd hope to highlight why you should learn it, what you gain from it, and how to learn it (resources).

## Why you should learn it

Serverless is popular because of the developer experience. It is so much easier to use a serverless service than a server-based deployment.

All the cloud vendors have incredible support for serverless: AWS, GCP, Azure.

New vendors are doing some really interesting work on serverless: Cloudflare, Netlify, Vercel.

These companies are at that stage in their growth where most of the services are free or close to free.

Tooling is incredible on all platforms. Even though no platform is awesome overall, each have their own gems - Azure is spending a lot of time on developer experience.

Serverless is simple to write. Everything is a function so by nature developers start to write small flexible micro-services. Part of the complexity of serverless comes from the architecture part of how we orchestrate all of the services to work together, but a quick refresher in distributed systems will help you navigate that.

Serverless is 'usually' cheaper that servers or virtual machines because of the on-demand nature and price per request.

Serverless is heavily documented. I'll takes AWS as an example and there are guides upon guides available. Not to mention official video, code snippets, and tutorials. That's just the official stuff too!

More and more companies require some knowledge. Due to the reasons above companies have adopted serverless and have either all their infrastructure as serverless solutions or run a hybrid mix of server and serverless solutions.

## How to learn it

Serverless can be done through the platform consoles sure, but as soon as you start creating 2 or more resources the console becomes cumbersome, not to mention how hard it is to trace your steps.

It’s worth picking an infrastructure as code framework before you start and the best templating in my opinion is Serverless Framework or Terraform (courses below). Serverless Framework is easy to get started with, but there are some services that are not covered by it.

If you’re going serverless, go all in. If you have an existing architecture then port everything to serverless including DBs. It might need some refactoring, but moving slowly might not be as beneficial as you think. Event a mock fullstack sample will teach you more than gradually migrating the stack over time.

DynamoDB is the most common serverless database, but there are new ones coming into the fold. DynamoDB follows a concept of ‘single-table’ design which can be kinda hard to understand at first if you're used to SQL. You can sinply use different tables for entities event thought it means you loose some benefits and performance - single table designs are optimised for performance and cost.

Spend some time really digging into Lambda or Cloud Functions and how they function. Recent new features allow you to generate custom lambda containers using Docker - this really changes Lambda from a swiss-army knife to a chainsaw.

Look into Lambda or Cloud Function power tuning to counteract cold start problems - [AWS Lambda Power Tuning Tools Github repo](https://github.com/alexcasalboni/aws-lambda-power-tuning). Some Cloud Functions will not have any cold start problems, like the Cloudflare Workers.

Stick to single responsibility principle with serverless. Breaking architecture up into microservices should be always on your mind. You’ll reach a point where you need to use multiple lambda, streams (data streams) and data queues are useful for integrating micro-services and allowing for a share data flow.

Consider data logging and tracing early. Use AWS CloudWatch, AWS X-Ray or a 3rd party tool. It might cost a bit more, but it will save time when debugging.

Invest in a monitoring setup. You want to know when something gets hammered or gets throttled - a dashboard will do wonders to highlight this.

Take a certification course even if you don’t want to officially take the exam. The courses usually cover a lot of ground. The AWS certifications have free videos on FreeCodeCamp.

## Resources:

- FooBar Serverless - loads of great tutorials [https://www.youtube.com/channel/UCSLIvjWJwLRQze9Pn4cectQ](https://www.youtube.com/channel/UCSLIvjWJwLRQze9Pn4cectQ)
- Complete Coding - Sam and I worked in the same company last year and he's a great instructor, he covers a lot of serverless topics on Youtube [https://www.youtube.com/channel/UC8uBP0Un18DJAnWjm1CPqBg](https://www.youtube.com/channel/UC8uBP0Un18DJAnWjm1CPqBg)
- Serverless Stack - the best tutorial for learning serverless, really elaborate, covers a lot of yml concepts and follows project structure best practices [https://serverless-stack.com/](https://serverless-stack.com/)
- AWS Lambda Terraform cookbook - using Terraform to orchestrate any example of Lambda services [https://github.com/nsriram/lambda-the-terraform-way](https://github.com/nsriram/lambda-the-terraform-way)
- FreeCodeCamp - AWS Associate Developer certification, covers a lot of serverless tools [https://www.youtube.com/watch?v=RrKRN9zRBWs](https://www.youtube.com/watch?v=RrKRN9zRBWs)
- FreeCodeCamp - AWS Solutions Architect certification - this covers less serverless specifics, more networking, servers, business practices, can teach you a lot if you are a beginner [https://www.youtube.com/watch?v=Ia-UEYYR44s&t=2616s](https://www.youtube.com/watch?v=Ia-UEYYR44s&t=2616s)
