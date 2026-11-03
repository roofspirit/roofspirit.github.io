## Summary
Python and SQL engineer with 4+ years of experience, including a year on YTsaurus (Yandex's open-source Hadoop alternative): distributed storage, MapReduce, SQL. There I did data lifecycle and archiving work on tables up to ~50 TB, quota and capacity analysis, and maintenance of ETL pipelines on an internal DAG workflow platform. Before that, I built data integrations and pipelines for internal business systems. I'm looking to grow as a Data Engineer.

## Skills
- **SQL:** CTEs, window functions, large joins on distributed data, ClickHouse
- **Big data processing:** YTsaurus (distributed storage and compute), MapReduce (merge, sort, map, copy), small-files compaction, data archiving and retention, schemas, JSON/CSV/Excel
- **Orchestration:** DAG workflows, custom Python task orchestration, CI-scheduled jobs
- **Python:** Python 3 with type hints, Pydantic (data validation and schemas), asyncio, multithreading, pytest, Typer CLI tools, uv, FastAPI, Flask, Django
- **Data ingestion:** REST API clients (requests, httpx), web scraping (Selenium, Playwright, Telethon), Excel/CSV/JSON parsing, rate limiting, response caching, idempotent and resumable jobs, retries
- **Infrastructure:** Linux, Bash, Docker, Docker Compose, Git, CI/CD (YAML pipelines), S3
- **Familiar with:** pandas, Prefect, PostgreSQL, Parquet, DuckDB, Spark basics

## Experience

### Technical Manager, Crowd Infrastructure (hands-on engineering role) | Yandex Crowd (Yandex)
*Feb 2025 – Mar 2026 | Moscow; remote from Israel from Nov 2025*
- Designed and built **Data Archivator**, a Python orchestrator that runs all heavy compute as distributed MapReduce and SQL jobs on YTsaurus (Yandex's open-source Hadoop alternative). It finds tables unused by last access time and owner activity, compacts them row by row into one archive table (source ID, path, timestamp, row as JSON) and restores them from stored schemas.
- Solved the platform's "small files" problem, a cap on objects in the metadata namespace similar to the HDFS NameNode limit. Cut the department's object quota usage by **~20%** after the first full run and improved compression by consolidating scattered tables. Validated the savings with a synthetic-data benchmark; shipped with tests.
- Wrote SQL analytics over ~50 TB tables and the platform metadata tree to find unused data and quotas, and gave capacity-planning numbers to the team lead.
- Maintained ETL pipelines on Yandex's internal DAG workflow platform: fixed broken workflows and ran a migration to a new internal messenger API across department pipelines (dependency audit, updates, owner notification).
- Planned change requests (RFCs) for destructive operations on shared data (deleting or moving large directories) so that no dependent process failed.
- Built a CI pipeline that validates YAML metadata and publishes a browser-extension allowlist to S3 for thousands of labelers (~500 extensions reviewed, 30+ approved; one versioned source of truth used by several teams).

### Data Automation Engineer → Python Full-Stack Developer | Systeme Electric (Schneider Electric Russia)
*Jul 2021 – Feb 2025 | Moscow*
- Built the data model and application for a competence management system (engineers, skills, certificates; Django, SQLite). Its data fed downstream cost, travel and training planning. The system saved ~3 days per quarter for each of 7 team leads and was the source of truth for other internal tools.
- Built a keyword search and ranking engine (Whoosh) that matches engineers to jobs by skills and region. Selection time dropped from **1–2 hours to minutes**.
- Built data integrations: strongly typed Excel import/export, Excel files on Nextcloud, REST APIs, and a Selenium-based extractor for the internal Salesforce where no API access existed.
- Led a data quality specialist and a full-stack developer: code reviews, project management, hiring and onboarding.

### Volunteer: OSINT Team Lead & Automation | Israeli non-profit (media & advocacy)
*Mar 2026 – Present | Part-time*
- Built a resumable data collection pipeline for ~30 social media accounts and 5–10k posts across 6 platforms (Apify, Telethon). It caches every response, caps cost and rate limits, loads incrementally, reports gaps and exports to CSV/JSON. The data fed a quarterly sponsor report.

## Education
**Bachelor of Business Informatics** | Financial University under the Government of the Russian Federation, 2024
Faculty of Information Technology and Big Data Analysis

## Languages
English: professional working proficiency | Russian: native | Hebrew: basic (Aleph/Bet)
