import React from "react";

export default function App() {
  return (
    <main className="max-w-5xl mx-auto p-6 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Dushan Kumarasinghe</h1>
        <p className="text-lg">Associate Tech Lead | Gampaha, Sri Lanka</p>
        <p className="text-sm text-gray-600">
          <a href="mailto:dushank77@gmail.com" className="underline">dushank77@gmail.com</a> | +94 774 526 780
        </p>
        <p className="text-sm text-blue-600">
          <a href="https://github.com/dushan14" target="_blank" rel="noopener noreferrer" className="mr-2">GitHub</a>
          <a href="https://medium.com/@dushan14" target="_blank" rel="noopener noreferrer">Medium</a>
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Professional Summary</h2>
        <p>
          Passionate and solution-driven software engineer with 6+ years of experience in full-stack and data engineering.
          Adept at building scalable web, mobile, and ETL solutions. Strong team collaborator, always eager to tackle complex
          problems and drive technical excellence.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Technical Skills</h2>
        <ul className="list-disc list-inside">
          <li><strong>Languages:</strong> Java, JavaScript, TypeScript, Python, Dart, PHP</li>
          <li><strong>Frameworks:</strong> Spring Boot, Node.js, Flask, FastAPI, GraphQL, Flutter</li>
          <li><strong>Frontend:</strong> React, Angular, Redux, Jest, WebSocket</li>
          <li><strong>Databases:</strong> PostgreSQL, Oracle, MySQL, SQLite, Couchbase, Elasticsearch</li>
          <li><strong>DevOps & Tools:</strong> Docker, Kubernetes, Git, Maven</li>
          <li><strong>Data/ETL:</strong> PySpark, Iceberg, Scikit-Learn, TensorFlow</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Professional Experience</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Associate Tech Lead - Sysco Labs</h3>
          <p className="text-sm italic text-gray-600">Aug 2024 - Present</p>
          <ul className="list-disc list-inside">
            <li>Leading initiatives for Sysco Shop, overseeing solution design and team coordination.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Senior Software Engineer - Sysco Labs</h3>
          <p className="text-sm italic text-gray-600">Aug 2022 - Jul 2024</p>
          <ul className="list-disc list-inside">
            <li>Led full-stack development and PySpark ETL for sales representative web portal.</li>
            <li>Introduced scalable data handling solutions using Iceberg and Elasticsearch.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Senior/Software Engineer - CodeGen</h3>
          <p className="text-sm italic text-gray-600">Jan 2019 - Jul 2022</p>
          <ul className="list-disc list-inside">
            <li>Worked on DMC system with microservices and Flutter apps for the travel industry.</li>
            <li>Led cross-functional teams and developed full-stack solutions.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Trainee Software Engineer - GE Transportation</h3>
          <p className="text-sm italic text-gray-600">Jun 2017 - Nov 2017</p>
          <ul className="list-disc list-inside">
            <li>Contributed to internal tools for supply chain and railcar data systems using Java and Angular.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Education</h2>
        <p><strong>MSc - Computer Science & Engineering (Data Science and Analytics)</strong><br />
        University of Moratuwa | Expected Apr 2025 | 2 Research Papers Published</p>
        <p className="mt-2"><strong>BSc Engineering (Hons) in Computer Science and Engineering</strong><br />
        University of Moratuwa | GPA: 3.47 | Second Upper Class</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Key Projects</h2>
        <ul className="list-disc list-inside">
          <li><strong>iRoads:</strong> ML-powered mobile app for road anomaly detection (Final Year Group Project)</li>
          <li><strong>Abstract Generator:</strong> LLM-based MSc research for generating research paper abstracts</li>
          <li><strong>Hotel Mapping:</strong> ML-based name reconciliation for hotel databases across sources</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Publications</h2>
        <ul className="list-disc list-inside">
          <li>TRF: Extended abstract on iRoads project</li>
          <li>ICCCI 2024: Abstract Generation using Hybrid Model & Relevance Matrix</li>
          <li>ROCLING 2022: Automatic Abstract Generation</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Affiliations</h2>
        <p>Associate Member, Institution of Engineers Sri Lanka (IESL)</p>
      </section>
    </main>
  );
}
