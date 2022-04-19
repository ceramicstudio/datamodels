# Contributing to the DataModels registry

## Getting started

Want to contribute to this project? Great!

Before you begin, make sure you have a good understanding of [DataModels](https://developers.ceramic.network/tools/glaze/datamodel/) and [Ceramic](https://developers.ceramic.network/) in general.

## Discussions

Please use [discussions](https://github.com/ceramicstudio/datamodels/discussions) to [talk about existing models](https://github.com/ceramicstudio/datamodels/discussions/categories/models), submit [ideas for new ones](https://github.com/ceramicstudio/datamodels/discussions/categories/ideas), present [examples of projects using models](https://github.com/ceramicstudio/datamodels/discussions/categories/show-and-tell) or simply [ask questions](https://github.com/ceramicstudio/datamodels/discussions/categories/q-a).

## Pull requests

You can open a [pull request](https://github.com/ceramicstudio/datamodels/pulls) to suggest changes to an existing model or to add a new model, considering the following:

### Existing model change

**Avoid making breaking changes to schemas**

There is currently no mechanism to safely apply breaking changes to tiles at runtime so breaking schema changes can affect apps using them.

**Keep within the existing scope**

Avoid adding new schemas and definitions to an existing model. Creating a new model might be a better option to allow more modularity.

### New model

**Avoid duplication with existing models**

One of the purposes of the registry is to help discovery and reusability of models. Please consider if the use case for a new model could be otherwise covered by combining existing models.

**Follow naming conventions**

Package names in the repository must use the `@datamodels/` prefix, followed by at least two words separated by a dash (`-`). Only lowercase alphabetical characters (`a-z`), numbers (`0-9`), dashes (`-`) and dots (`.`) should be used.

Packages will be published manually by 3Box Labs to the npm registry after being merged.

**Follow the template**

Use the same template as existing packages to ensure full compatibility, including:

- Exporting the JSON-encoded model under the `model` name
- Providing only ESM exports
- Providing the source JSON schemas in the `schemas` folder
- Providing TypeScript declarations

Furthermore, models added to the registry must be dual licensed under Apache 2.0 and MIT.

**Add your model to the index**

Make sure to add an entry in the [INDEX.md](INDEX.md) file for the added package, following the existing structure. Entries must be sorted alphabetically.

**Run tests locally**

Run `yarn test` in the root of the project to make sure your changes pass existing checks.
