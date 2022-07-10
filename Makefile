VERSION := 0.0.3

workflow:
	git tag -m "v${VERSION}" v${VERSION}
	git push --tags
