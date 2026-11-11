import Image from "next/image";
import { getPublishedTeam } from "@/lib/mock-data";

export const metadata = {
  title: "Our Team",
  description: "Leadership and key professionals.",
};

export default function TeamPage() {
  const team = getPublishedTeam();

  return (
    <div className="pt-20">
      <section className="border-b border-concrete/50 bg-white py-16 md:py-20">
        <div className="container-wide">
          <p className="eyebrow">People</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Our Team
          </h1>
          <p className="mt-4 max-w-2xl text-charcoal/70">
            Leadership and key professionals. Names, roles, and biographies are
            placeholders until real profiles are supplied. Do not treat these as
            real identities.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.id} className="card-surface overflow-hidden">
                <div className="relative aspect-[3/4] bg-concrete/30">
                  <Image
                    src={member.photo}
                    alt={`Portrait placeholder for ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-lg font-semibold">
                    {member.name}
                  </h2>
                  <p className="text-sm font-medium text-amber">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
