---
title: Mobile is harder than it looks
date: 2026-07-10
summary: I spent years on ML and web before I shipped a phone app. Turns out the app is the easy part.
---

Before this year, if you'd asked me, I'd have told you a mobile app was just a frontend with a smaller screen. I'd trained models and built web apps, and I figured an app was the same kind of work in a different wrapper. Then I actually shipped one to both app stores, and I owe a quiet apology to every mobile engineer I ever underrated.

Honestly, even the 'frontend' part is much harder than people think. Start with the fact that an app isn't really a frontend at all.

It's a tangible piece of software, delivered to the user via some app store, that must be installed and carries its own local backend. That local backend then has to stay in sync with the 'real' backend, and with everywhere else the data lives - the web app, and so on.

And it runs in a hostile environment. The phone always prioritizes itself and the user, and will throw your app's needs under the bus - rightfully so. You literally cannot even ask for a permission twice in a row (if the user pressed the wrong button) without the OS shutting you down.

### On the web, "ship it" means something

On the web, shipping is a verb that everyone uses for something you can do as many times a day as you'd like. You push, and within seconds every user is on the new version. Break something? Fix it, push again, done. The feedback loop is so tight you shouldn't even waste time debating whether to push.

Mobile does not work like that. You compile a binary, hand it to two companies for review, and wait. If they approve it (and Apple likes to take its sweet time), it lands on devices you will never touch, half of which will never update again. The users don't owe you shit. They may uninstall if you force them to update. You are just shipping software and hoping for the best. Shipping as in "mailing a package and hoping it gets there".

### The duopoly

Apple and Google both have to let you in, on their schedule, and you have no choice but to use them.
What's worse is that what breaks on one doesn't necessarily break on the other. Apple really makes it difficult to do anything, but in their defense - they actually review everything (or at least pretend to). Good on them for taking user privacy seriously. Google is more permissive about what you can ship, but that openness has a price: Android runs on thousands of device models, each with a different screen shape, and you get to support all of them. Hence even the frontend being hard.

### You support your own past forever

The version a user installed in March is still out there in July, still talking to your backend. You cannot force anyone to update, so every API change has to keep the old clients alive. Let's say you forget to add a hook that forces users to update when a version is unsupported (true, embarrassing story). That's it - that user is locked out forever, unless they decide of their own volition to update. They probably won't, though. At the slightest bit of friction, users just uninstall.

### The ecosystem

Certificates, provisioning profiles, signing keys, keystores, entitlements. Half of them expire, all of them can brick a release at the worst possible moment, and there is an entire genre of workday that is just convincing two operating systems that you are allowed to run your own code.

Then the toolchains rot underneath you. Xcode updates, Gradle updates, the framework updates, and a build that was green yesterday is red today for reasons that have nothing to do with anything you wrote. And everything takes soooo long to recompile.

### The point

None of this is terribly interesting or novel. The interesting work is the product: what the app does and whether anyone's life is better for it. But the difficulty is real, and it's almost entirely invisible from the outside, which is exactly why it's underappreciated. The hard parts don't live in the app. They live in the weeks before it's allowed to exist and the entire life of the thing afterward.

So when someone shows you a small mobile app that works, with real users, and shrugs like it was nothing: assume there's an iceberg under it. And if you're thinking of creating your own app, really ask yourself - why wouldn't a mobile web app be good enough? It probably is.

We figured that for us it wasn't, so we got sucked in anyway. A real mobile app is the only way to be fully attached to your users - right there in their pocket, at their fingertips. It's also a terrible journey. Cannot wholeheartedly reccomend.
