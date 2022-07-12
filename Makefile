VERSION := 1.0.1

workflow:
	git tag -m "v${VERSION}" v${VERSION}
	git push --tags
