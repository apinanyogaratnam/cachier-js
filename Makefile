VERSION := 0.0.2

workflow:
	git tag -m "v${VERSION}" v${VERSION}
	git push --tags
