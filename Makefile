VERSION := 0.0.4

workflow:
	git tag -m "v${VERSION}" v${VERSION}
	git push --tags
