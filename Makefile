VERSION := 0.0.5

workflow:
	git tag -m "v${VERSION}" v${VERSION}
	git push --tags
