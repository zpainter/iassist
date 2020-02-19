+++
nid = "7510"
uid = "858"
author = "ABattista"
title = "The Challenge of Rescuing Data: Lessons and Thoughts"
tags = [ "Data Access & Open Data",]
oldpath = "/blog/challenge-rescuing-data-lessons-and-thoughts"
date = "2017-05-15 12:51:51 -0700"
draft = "false"
+++
*A version of this post originally appeared on the [NYU Data Dispatch
blog](https://data-services.hosting.nyu.edu/the-challenge-of-rescuing-federal-data-thoughts-and-lessons/).*

Data rescue [efforts began in January
2017](https://www.wired.com/2017/01/rogue-scientists-race-save-climate-data-trump/),
and over the past few months many institutions hosted hack-a-thon style
events to scrape data and develop strategies for preservation. The
Environmental Data & Governance Initiative (EDGI) developed a [data
rescue toolkit](https://envirodatagov.org/event-toolkit/), which
apportioned the challenge of saving data by distinct federal agency. 

We've had a number of conversations at NYU and with other members of
the library community about the implications of preserving federal data
and providing access to it. The efforts, while important, call attention
to a problem of organization that is very large in scope and likely
cannot be solved in full by libraries.

[![](http://data-services.hosting.nyu.edu/wp-content/uploads/2017/04/starfish_story.png){.wp-image-996 .size-full width="632" height="350"}](http://data-services.hosting.nyu.edu/wp-content/uploads/2017/04/starfish_story.png)
:   *Also a metaphor for preserving federal data*

Thus far, the divide-and-conquer model has postulated that individual
institutions can "claim" a specific federal agency, do a deep dive to
root around its websites, download data, and then mark the agency off
a list as "preserved." The process raises many questions, for
libraries and for the data refuge movement. What does it mean to
"claim" a federal agency? How can one institution reasonably develop a
"chain of custody" for an agency's comprehensive collection of data
(and how do we define chain of custody)?

How do we avoid duplicated labor? Overlap is inevitable and isn't
necessarily a bad thing, but given the scope of the challenge, it would
be ideal to distribute efforts so as to benefit from the hard work of
metadata remediation that all of us will inevitably do.

These questions suggest even more questions about communication. How do
we know when a given institution has preserved federal data, and at what
point do we feel ready as a community to acknowledge that preservation
has sufficiently taken place? Further, do we expect institutions to
communicate that a piece of data has been published, and if so, by what
means? What does preservation mean, especially in an environment where
data is changing frequently, and what is the standard for discovery? Is
it sufficient for one person or institution to download a file and
save it? And when an institution claims that it has "rescued" data from
a government agency, what commitment does it have to keep up with data
refreshes on a regular basis?

An example of an attempt to engage with these issues is Stanford
University's recent decision to preserve the [Housing and Urban
Development spatial
datasets](https://earthworks.stanford.edu/?page=1&per_page=100&q=United+States.+Department+of+Housing+and+Urban+Development),
since they were directly attacked by Republican lawmakers. Early in the
Spring 2017 semester, Stanford downloaded all of HUD's spatial data,
created metadata records for them, and loaded them into their spatial
discovery environment ([EarthWorks](https://earthworks.stanford.edu/)).

![](http://data-services.hosting.nyu.edu/wp-content/uploads/2017/05/Public-Housing-Authorities-2016-in-EarthWorks-1024x1015.png){.wp-image-1008 .size-large width="840" height="833"}
:   *A HUD dataset preserved in Stanford's Spatial Data Repository and
    digital collections*

We can see from the [timestamp on their metadata
record](https://earthworks.stanford.edu/catalog/stanford-jp095bg5089.json) that
the files were added on March 24, 2017. Stanford's collection process
is very robust and implies a level of curation and preservation that is
impressive. As colleagues, we know that by adding a file, Stanford has
committed to preserving it in its institutional repository,
presenting original FGDC or ISO 19139 metadata records, and publishing
their newly created records
to [OpenGeoMetadata](https://github.com/OpenGeoMetadata), a consortium
of shared geospatial metadata records. Furthermore, we know that all
records are discoverable at the layer level, which suggests a
granularity in description and access that often is not present at many
other sources, including Data.gov.

However, if I had not had conversations with colleagues who work at
Stanford, I wouldn't have realized they preserved the files at all and
likely would've tried to make records for [NYU's Spatial Data
Repository](https://geo.nyu.edu/). Even as they exist, it's difficult
for me to know that these files were in fact saved as part of the Data
Refuge effort. Furthermore, Stanford has made no public claim or
longterm "chain of custody" agreement for HUD data, simply because no
standards for doing so currently exist.

Maybe it wouldn't be the worst thing for NYU to add these files to our
repository, but it seems unnecessary, given the magnitude of federal
data to be preserved. However, some redundancy is a part of the [goals
that Data Refuge imagines](https://www.datarefuge.org/about):

> Data collected as part of the #DataRefuge initiative will be stored
> in multiple, trusted locations to help ensure continued accessibility.
> [...]DataRefuge acknowledges--and in fact draws attention to--the
> fact that there are no guarantees of perfectly safe information. But
> there are ways that we can create safe and trustworthy copies.
> DataRefuge is thus also a project to develop the best methods,
> practices, and protocols to do so.

Each institution has specific curatorial needs and responsibilities,
which imply choices about providing access to materials in library
collections. These practices seldom coalesce with data management and
publishing practices from those who work with federal agencies. There
has to be some flexibility between community efforts to preserve data,
individual institutions and their respective curation practices.

**"That's Where the Librarians Come In"**

NYU imagines a model that dovetails with the Data Refuge effort in which
individual institutions build upon their own strengths and existing
infrastructure. We took as a directive some advice that Kimberly Eke at
Penn circulated, [including this sample
protocol](https://hackmd.io/BwQwJgxhYEYJwFoBsBGSCAswkgSOA7AQjPhMAKwrADMcYNQA). We
quickly began to realize that no approach is perfect, but we wanted to
develop a pilot process for collecting data and bringing it into our
permanent geospatial data holdings. The remainder of this post is a
narrative of that experience in order to demonstrate some of the choices
we made, assumptions we started with, and strategies we deployed to
preserve federal data. Our goal is to preserve a small subset of data in
a way that benefits our users and also meets the standards of the Data
Refuge movement.

![](http://data-services.hosting.nyu.edu/wp-content/uploads/2017/04/FS_green-273x300.png){.wp-image-1000
.size-medium .alignleft width="273" height="300"}

We began by collecting the entirety of publicly accessible metadata
from [Data.gov](http://data.gov/), using the underlying the [CKAN data
catalog API](http://docs.ckan.org/en/latest/api/). This provided us with
approximately 150,000 metadata records, stored as individual JSON files.
Anyone who has worked with Data.gov metadata knows that it's messy and
inconsistent but is also a good starting place to develop better
records. Furthermore, the concept of Data.gov serves as an effective
registry or checklist [(this global metadata vault could be another
starting place)](https://github.com/datproject/svalbard); it's not the
only source of government data, nor is it necessarily authoritative.
However, it is a good point of departure, a relatively centralized list
of items that exist in a form that we can work with.

Since NYU Libraries already has a robust spatial data infrastructure and
has established workflows for accessioning GIS data, we began
by reducing the set of Data.gov records to those which are likely to
represent spatial data. We did this by searching only for files that
meet the following conditions:

-   Record contains at least one download resource with a 'format'
    field that contains any of {'shapefile', 'geojson', 'kml',
    'kmz'}
-   Record contains at least one resource with a 'url' field that
    contains any of {'shapefile', 'geojson', 'kml', ['original'
    followed by '.zip']}

That search generated 6,353 records that are extremely likely to contain
geospatial data. From that search we [yielded a subset of
records](https://docs.google.com/spreadsheets/d/11s110BBqw7tr-A1stPsjmmRqx85eTxsCn8PiFiGLGCA/pubhtml?gid=856218329&single=true) and
then transformed them into a .CSV.

The next step was to filter down and look for meaningful patterns. We
first filtered out all records that were not from federal sources,
divided categories into like agencies, and started exploring them.
Ultimately, we decided to rescue data from the Department of
Agriculture, Forest Service. This agency seems to be a good test case
for a number of the challenges that we've identified. We
isolated 136 records and organized them [here (click to view
spreadsheet)](https://docs.google.com/spreadsheets/d/11s110BBqw7tr-A1stPsjmmRqx85eTxsCn8PiFiGLGCA/pubhtml?gid=1569491355&single=true).
However, we quickly realized that a sizable chunk of the records had
already somehow become inactive or defunct after we had downloaded them
(shaded in pink), perhaps because they had been superseded by another
record. For example, [this
record](http://catalog.data.gov/dataset/23c7852d-9e9e-47e5-b215-47028c1f094a) is
probably meant to represent the same [data as this
record](http://catalog.data.gov/dataset/09d11982-4bb5-474e-a690-6874da1f6042).
We can't know for sure, which means we immediately had to decide what
to do with potential gaps. We forged ahead with the records that were
"live" in Data.gov.

**About Metadata Cleaning**

There are some limitations to the metadata in Data.gov that required our
team to make a series of subjective decisions:

1.  Not everything in Data.gov points to an actual dataset. Often,
    records can point to other portals or clearinghouses of data that
    are not represented within Data.gov. We ultimately decided to omit
    these records from our data rescue effort, even if they point to a
    webpage, API, or geoservice that does contain some kind of data.
2.  The approach to establishing order on Data.gov is inconsistent. Most
    crucially for us, there is not a one-to-one correlation between a
    record and an individual layer of geospatial data. This happens
    frequently on federal sites. For instance, [the record for the U.S.
    Forest Service Aerial Fire Retardant Hydrographic Avoidance Areas:
    Aquatic](https://catalog.data.gov/dataset/77781e81-17d6-4f91-a2df-7dfc7cb33eef) actually
    contains eight distinct shapefile layers that correspond to the
    different regions of coverage. NYU's collection practice
    dictates that each of these layers be represented by a distinct
    record, but in the Data.gov catalog, they are condensed into a
    single record. 
3.  Not all data providers publish records for data on Data.gov
    consistently. Many agencies point to some element of their data that
    exists, but when you leave the Data.gov catalog environment and go
    to the source URL listed in the resources section of the record,
    you'll find even more data. We had to make decisions about whether
    or not (and how) we would include this kind of data.
4.  It's very common that single Data.gov metadata records remain
    intact, but the data that they represent changes. The Forest
    Service is a good example of this, as files are frequently refreshed
    and maintained within the USDA Forestry [geodata
    clearinghouse](https://data.fs.usda.gov/geodata/). We did not make
    any effort in either of these cases to track down other sets of data
    that the Data.gov metadata records gesture toward (at least not at
    this time).

Relatedly, we did not make attempts to provide original records for
different formats of what appeared to be the same data. In the case of
the Forest Service, many of the records contained both a shapefile and a
geodatabase, as well as other original metadata files. Our general
approach was to save the shapefile and publish it in our collection
environment, then bundle up all other "data objects" associated with a
discrete Data.gov record and include them in the preservation
environment of our Spatial Data Repository.

Finally, we realized that the quality of the metadata itself varies
widely. We found that it's a good starting place to creating metadata
for discovery, even if we agree that a Data.gov record is an arbitrary
way to describe a single piece of data. However, we had to clean the
Data.gov records to adhere to the GeoBlacklight standard and our own
internal cataloging practices. Some of the revisions to the metadata are
small and reflect choices that we make at NYU (these are highlighted in
red). For instance, the titles were changed to reflect a date-title-area
convention that we already use. Other fields (like Publisher) are
authority controlled and were easy to change, while others, like format
and provenance, were easy to add. For those unfamiliar with the
GeoBlacklight standard, [refer to the project schema pages and related
documentation](https://github.com/geoblacklight/geoblacklight-schema).
Many of the metadata enhancements are system requirements for items to
be discovered within our [Spatial Data
Repository](https://geo.nyu.edu/). Subjects presented more of a problem,
as these are drawn from an informal tagging system on Data.gov. We used
an elaborate process of finding and replacing to remediate these
subjects into the LCSH Authority, which connects the items we collect
into our larger library discovery environment.

The most significant changes are in the descriptions. We preserved the
essence of the original Data.gov description, yet we cleaned up the
prose a little bit and added a way to trace the item that we are
preserving back to its original representation in Data.gov. In the case
of aforementioned instances, in which a single Data.gov record contains
more than one shapefile, we generated an entirely new record and
referenced it to the original Data.gov UUID. 

**Future Directions: Publishing Checksums**

Libraries' ability to represent precisely and accurately which
datasets, or components of datasets, have been preserved is
a serious impediment to embarking on a distributed repository /
data-rescue project. Further, libraries need to know if data objects
have been preserved and where they reside. To return to the earlier
example, how is New York University to know that a particular government
dataset has already been "rescued" and is being preserved (either via
a publicly-accessible repository interface, or not)?

Moreover, even if there is a venue for institutions to discuss which
government datasets fall within their collection priorities (e.g. "New
York University cares about federal forestry data, and therefore will be
responsible for the stewardship of that data"), it's not clear that
there is a good strategy for representing the myriad ways in which the
data might exist in its "rescued" form. Perhaps the institution that
elects to preserve a dataset wants to make a few curatorial decisions in
order to better contextualize the data with the rest of the
institution's offerings (as we did with the Forest Service data). These
types of decisions are not abnormal in the context of library
accessioning.

The problem comes when data processing practices of an institution,
which are often idiosyncratic and filled with "local" decisions to a
certain degree, start to inhibit the ability for individuals to identify
a copy of a dataset in the capacity of a copy. There is a potential
tension between preservation ---- preserving the original file
structure, naming conventions, and even level of dissemination of
government data products ---- and discovery, where libraries often make
decisions about the most useful way for users to find relevant data that
are in conflict with the decisions exhibited in the source files.

For the purposes of mitigating the problem sketched above, we propose a
data store that can be drawn upon by all members of the library /
data-rescue community, whereby the arbitrary or locally-specific
mappings and organizational decisions can be related back to original
checksums of individual, atomic, files. File checksums would be unique
identifiers in such a datastore, and given a checksum, this service
would display "claims" about institutions that hold the corresponding
file, and the context in which that file is accessible.

Consider this as an example:

-   New York University, as part of an intentional data rescue effort,
    decides to focus on collecting and preserving data from the U.S.
    Forest Service.
-   The documents and data from Forest Service are accessible through
    many venues:
    -   They (or some subset) are linked to from a Data.gov record
    -   They (or some subset) are linked to directly from the [FSGeodata
        Clearinghouse](https://data.fs.usda.gov/geodata/)
    -   They are available directly from a geoservices or FTP endpoint
        maintained by the Forest Service (such
        as [here](https://apps.fs.usda.gov/arcx/rest/services/EDW)).
-   NYU wants a way to grab all of the documents from the Forest
    Service that it is aware of and make those documents available in an
    online repository. The question is, if NYU has made organizational
    and curatorial decisions about the presentation of documents
    rescued, how can it be represented (to others) that the files in the
    repository are indeed preserved copies of other datasets? If, for
    instance, Purdue University comes along and wants to verify that
    everything on the Forest Service's site is preserved somewhere, it
    now becomes more difficult to do so, particularly since those
    documents never possessed a canonical or authoritative ID in the
    first place, and even could have been downloaded originally from
    various source URLs.

Imagine instead that as NYU accessions documents ----restructuring them
and adding metadata ---- they not only create checksum manifests
(similar to, if not even identical to the ones created by default
by [BagIt](https://en.wikipedia.org/wiki/BagIt)), but also deposit those
manifests to a centralized data store in such a form that the data store
could now relate essential information:

The file with
checksum `8a53c3c191cd27e3472b3e717e3c2d7d979084b74ace0d1e86042b11b56f2797` appears
in as a component of the document `instituton_a_9876...` held
by `New York University.`

Assuming all checksums are computed at the lowest possible level on
files rescued from Federal agencies (i.e., always unzip archives, or
otherwise get to an atomic file before computing a checksum), such a
service could use archival manifest data as a way to signal to other
institutions if a file has been preserved, regardless of whether or not
it exists as a smaller component of a different intellectual entity ----
and it could even communicate additional data about where to find these
preserved copies. In the example of the dataset mentioned above, the
original Data.gov record represents 8 distinct resources, including a
Shapefile, a geodatabase, an XML metadata document, an HTML file that
links to an API, and more. For the sake of preservation, we could
package all of these items, generate checksums for each, and then take a
further step in contributing our manifest to this
hypothetical datastore. Then, as other institutions look to save other
data objects, they could search against this datastore and find not
merely checksums of items at the *package* level, but actually at the
package component level, allowing them to evaluate which portion or
percentage of data has been preserved.

A system such as the one sketched above could efficiently communicate
preservation priorities to a community of practice, and even find use
for more general collection-development priorities of a library. Other
work in this field, particularly that regarding IPFS, could tie in
nicely ---- but unlike IPFS, this would provide a way to identify
content that exists within file archives, and would not necessitate any
new infrastructure for hosting material. All it would require is for an
institution to contribute checksum manifests and a small amount of
accompanying metadata to a central datastore.

**Principles**

Even though our rescue of the Forest Service data is still in process,
we have learned a lot about the challenges associated with this project.
We're very interested in learning about how other institutions are
handling the process of rescuing federal data and look forward to more
discussions at the event in Washington D.C. on May 8.
