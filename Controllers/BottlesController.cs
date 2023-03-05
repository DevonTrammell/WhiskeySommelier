using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WhiskeySommelier.Models;

namespace WhiskeySommelier.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BottlesController : ControllerBase
    {
        private readonly WhiskeySommelierContext _context;

        public BottlesController(WhiskeySommelierContext context)
        {
            _context = context;
        }

        // GET: api/Bottles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bottle>>> GetBottles()
        {
            return await _context.Bottles.ToListAsync();
        }

        // GET: api/Bottles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bottle>> GetBottle(string id)
        {
            var bottle = await _context.Bottles.FindAsync(id);

            if (bottle == null)
            {
                return NotFound();
            }

            return bottle;
        }

        // PUT: api/Bottles/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBottle(string id, Bottle bottle)
        {
            if (id != bottle.Name)
            {
                return BadRequest();
            }

            _context.Entry(bottle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BottleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Bottles
        [HttpPost]
        public async Task<ActionResult<Bottle>> PostBottle(Bottle bottle)
        {
            _context.Bottles.Add(bottle);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BottleExists(bottle.Name))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBottle", new { id = bottle.Name }, bottle);
        }

        // DELETE: api/Bottles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBottle(string id)
        {
            var bottle = await _context.Bottles.FindAsync(id);
            if (bottle == null)
            {
                return NotFound();
            }

            _context.Bottles.Remove(bottle);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BottleExists(string id)
        {
            return _context.Bottles.Any(e => e.Name == id);
        }
    }
}
