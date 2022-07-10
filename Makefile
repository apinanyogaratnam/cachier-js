VERSION := 0.1.0

workflow:
	git tag -m "v${VERSION}" v${VERSION}
	git push --tags
