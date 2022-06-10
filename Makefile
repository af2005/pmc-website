lint:
	npx prettier --write .

deploy:
	gatsby build && make lint && git add --all && git commit -am "quick deploy" && git push

