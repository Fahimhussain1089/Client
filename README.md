main =>  fahimhussain/app-update ==>  hussain/mac-kubernites 

##Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes

Event-Based Architecture? Covered! Server side rendering with React? Yep. Scalable, production-ready code? Its here!

This course requires you to download Docker Desktop from Docker. If you are a Udemy Business user, please check with your employer before downloading software.

Microservices are the number one solution for building and scaling out apps that are intended to grow. Just one little issue: there are few resources online that delve into the most complex and nasty issues around them! I built this course to fix that. This course tackles every major issues around microservices head on. From challenges with data replication to confusing unordered event streams, every major challenge of building microservices is covered.

Beyond focusing on the basics of microservices, this course is a perfect introduction to the world of full-stack development. You will work all the way from the frontend, assembling a React app using Hooks, to the backend, including database design and deployment strategies. Every step along the way is covered in tremendous detail, with ample diagrams to ensure every step is crystal clear.

Many other resources show only the easiest, simplest apps written with microservices. This course does the opposite: we focus on the most challenging aspects of microservices, challenges that you will likely encounter every single day. You will see these difficulties first hand, then solve them with easy-to-understand strategies.

How This Course Works

This course doesn't focus on using an off-the-shelf microservices framework. Many exist, but they hide the inner workings and challenges of microservices away from you. Instead, we will be using a minimal number of libraries, and write as much custom code as possible. This will expose you to challenging problems and clever solutions when handling subjects like async events!
[21:52, 31/10/2025] Fahim hussain👍: What Technology You'll Use

Because we are building a full stack application, we will use a variety of technologies. On the frontend, we'll use React and Next JS to present content to users. Each service is created using Node and Express. Data for each service is held in either a Mongo database or Redis. The entire app is deployed and runs in Docker containers executed in a Kubernetes cluster. Finally, almost all of the code in this course is written with Typescript.

This is a scary list of technologies! Not familiar with some of these? No problem! The course is built assuming that you only know the basics of Javascript and Express. No other knowledge is needed -you will learn everything you need to know.

What You'll Be Able to Do

By the time you complete this course, you will be able to:

Architect a multi-service application

Determine whether your app is a good fit for a microservices approach

Understand and solve the challenges in async, event-based communication between services

Use Docker and Kubernetes to deploy a multi-service app to any cloud provider

Organize and enhance the reusability of code in large projects

What You'll Learn

An absolute incredible number of topics are covered in this course.

Here is a partial list of what you'll do:

Practice patterns to create scalable microservices for a variety of app domains

Build a Server-Side-Rendered React app using Hooks and Next JS

Write a custom implementation of an event bus

Optionally, run a development environment through a cloud provider
[21:52, 31/10/2025] Fahim hussain👍: Determine whether your app is a good fit for a microservices approach

Understand and solve the challenges in async, event-based communication between services

Use Docker and Kubernetes to deploy a multi-service app to any cloud provider

Organize and enhance the reusability of code in large projects

What You'll Learn

An absolute incredible number of topics are covered in this course.

Here is a partial list of what you'll do:

Practice patterns to create scalable microservices for a variety of app domains

Build a Server-Side-Rendered React app using Hooks and Next JS

Write a custom implementation of an event bus

Optionally, run a development environment through a cloud provider

Guarantee consistently structured responses from your different API's

See best practices in communication between different services

Configure and scale your services using Kubernetes Deployments

Document and enforce structure constraints on events shared across microservices

Limit access to your APIs using JWT-based authentication

And much more!

This is the course I wish I had when I was learning microservices. A course that focuses on the hardest parts, gives clear explanations, and discusses the pros and cons of different design options. Sign up today and join me in mastering microservices!
<img width="1434" height="900" alt="Screenshot 2025-10-31 at 12 19 47 AM" src="https://github.com/user-attachments/assets/2a5bb5a5-f7a1-443c-a77d-028de8d863fe" />

<img width="1461" height="944" alt="Screenshot 2025-11-01 at 12 08 05 AM" src="https://github.com/user-attachments/assets/28e06608-07b7-49fd-a490-78777eeac0f4" />

When running kubectl apply in the upcoming lecture, you may encounter a warning or error about the v1beta1 API version that is being used.

The v1 Ingress API is now required as of Kubernetes v1.22 and the v1beta1 will no longer work.

A few very minor changes are needed:

https://kubernetes.io/docs/concepts/services-networking/ingress/

1. A pathType needs to be added

2. How we specify the backend service name and port has changed

3. The kubernetes.io/ingress.class annotation should be removed and replaced by the ingressClassName field under the spec:



apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-srv
spec:
  ingressClassName: nginx
  rules:
    - host: posts.com
      http:
        paths:
          - path: /posts
            pathType: Prefix
            backend:
              service:
                name: posts-clusterip-srv
                port:
                  number: 4000
Cannot be used with pathType Prefix Warning
A few lectures from now, you may eventually see a warning in your terminal:

Warning: path /posts/?{.*}/comments cannot be used with pathType Prefix
Warning: path /?{.*} cannot be used with pathType Prefix

If you wish to suppress the warning and follow the latest guidance, then, you can use the ImplementationSpecific pathType as explained in the updated docs:

https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#strict-validate-path-type

So, for any path that makes use of a regex, you would use ImplementationSpecific instead of Prefix.

eg:

          - path: /posts/?(.*)/comments
            pathType: ImplementationSpecific

